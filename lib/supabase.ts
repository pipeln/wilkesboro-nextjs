import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate env vars at build time
if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is required. Please set it in your environment variables.')
}

if (!supabaseKey) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is required. Please set it in your environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// News article type
export interface NewsArticle {
  id: string
  headline: string
  summary: string
  content?: string
  source: string
  category: string
  published_date: string
  status: string
  created_at?: string
  updated_at?: string
}

// Helper function to query Supabase
export async function querySupabase(table: string, options: any = {}) {
  let query = supabase.from(table).select(options.select || '*')
  
  if (options.eq) {
    query = query.eq(options.eq.column, options.eq.value)
  }
  
  if (options.order) {
    query = query.order(options.order.column, { ascending: options.order.ascending })
  }
  
  if (options.limit) {
    query = query.limit(options.limit)
  }
  
  return await query
}
