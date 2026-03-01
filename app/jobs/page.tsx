import Link from 'next/link'

export default function JobsPage() {
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
              <Link href="/news" className="text-gray-700 hover:text-blue-600 font-medium">News</Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 font-medium">Events</Link>
              <Link href="/jobs" className="text-blue-600 font-medium">Jobs</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Job Board</h1>
        
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <p className="text-gray-500">Job board coming soon. Check back for local job opportunities in Wilkes County!</p>
        </div>
      </main>
    </div>
  )
}
