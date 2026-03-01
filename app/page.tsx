import { querySupabase } from '@/lib/supabase'
import Link from 'next/link'

async function getNews() {
  const { data, error } = await querySupabase('news_items', {
    select: '*',
    eq: { column: 'status', value: 'Approved' },
    order: { column: 'published_date', ascending: false },
    limit: 6
  })
  
  if (error) {
    console.error('Error fetching news:', error)
    return []
  }
  
  return data || []
}

async function getWeather() {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=36.1585&longitude=-81.1526&current=temperature_2m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=America/New_York',
      { next: { revalidate: 3600 } }
    )
    return res.json()
  } catch (error) {
    console.error('Weather fetch error:', error)
    return null
  }
}

export default async function HomePage() {
  const [news, weather] = await Promise.all([getNews(), getWeather()])
  
  const featuredArticle = news[0]
  const latestNews = news.slice(1, 4)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <span className="font-bold text-xl text-gray-900">Wilkesboro</span>
                <span className="text-blue-600 font-semibold">Today</span>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/news" className="text-gray-700 hover:text-blue-600 font-medium">News</Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 font-medium">Events</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">Jobs</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            {featuredArticle ? (
              <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">W</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {featuredArticle.category}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {featuredArticle.headline}
                  </h1>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {featuredArticle.summary}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{featuredArticle.source}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.published_date}</span>
                  </div>
                </div>
              </article>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <p className="text-gray-500">No featured article available. Check back soon!</p>
              </div>
            )}
            
            {/* Latest News */}
            {latestNews.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Latest News</h2>
                <div className="space-y-4">
                  {latestNews.map((article: any) => (
                    <article key={article.id} className="bg-white rounded-lg shadow-sm p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg">
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                          <h3 className="font-semibold text-gray-900 mt-1">{article.headline}</h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{article.summary}</p>
                          <div className="flex items-center text-xs text-gray-500 mt-2">
                            <span>{article.source}</span>
                            <span className="mx-2">•</span>
                            <span>{article.published_date}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Weather</h3>
              {weather?.current ? (
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-4xl font-bold">{Math.round(weather.current.temperature_2m)}°F</span>
                      <p className="text-gray-600">Wilkesboro, NC</p>
                    </div>
                    <div className="text-4xl">☀️</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Humidity</span>
                      <span className="font-semibold">{weather.current.relative_humidity_2m}%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Weather data unavailable</p>
              )}
            </div>
            
            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/news" className="text-blue-600 hover:underline">All News</Link></li>
                <li><Link href="/events" className="text-blue-600 hover:underline">Events Calendar</Link></li>
                <li><Link href="/jobs" className="text-blue-600 hover:underline">Job Board</Link></li>
                <li><Link href="/resources" className="text-blue-600 hover:underline">Community Resources</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2026 Wilkesboro Today. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Serving Wilkes County, NC</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
