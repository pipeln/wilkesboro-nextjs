import { NextResponse } from 'next/server'
import { querySupabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await querySupabase('news_items', {
      select: '*',
      eq: { column: 'status', value: 'Approved' },
      order: { column: 'published_date', ascending: false },
      limit: 10
    })
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    return NextResponse.json({ news: data })
  } catch (error) {
    console.error('News API error:', error)
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}
