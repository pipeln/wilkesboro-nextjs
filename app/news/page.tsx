import { querySupabase } from '@/lib/supabase'
import Link from 'next/link'

async function getAllNews() {
  const { data, error } = await querySupabase('news_items', {
    select: '*',
    eq: { column: 'status', value: 'Approved' },
    order: { column: 'published_date', ascending: false }
  })
  
  if (error) {
    console.error('Error fetching news:', error)
    return []
  }
  
  return data || []
}

export default async function NewsPage() {
  const news = await getAllNews()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
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
              <Link href="/news" className="text-blue-600 font-medium">News</Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 font-medium">Events</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">Jobs</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All News</h1>
        
        {news.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <p className="text-gray-500">No news articles available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article: any) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-2xl font-bold">{article.source?.charAt(0) || 'N'}</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                    {article.category}
                  </span>
                  <h2 className="font-bold text-gray-900 mb-2">{article.headline}</h2>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.summary}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{article.source}</span>
                    <span className="mx-2">•</span>
                    <span>{article.published_date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
