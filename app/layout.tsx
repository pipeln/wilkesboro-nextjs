import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wilkesboro Today - Local News, Events & Resources',
  description: 'Your trusted source for local news, events, jobs, weather, and community resources in Wilkes County, North Carolina.',
  keywords: ['Wilkesboro', 'North Wilkesboro', 'Wilkes County', 'local news', 'events', 'jobs'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
