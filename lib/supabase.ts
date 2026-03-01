import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create client only if credentials are available
export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Helper function to safely query Supabase
export async function querySupabase(table: string, options: any = {}) {
  if (!supabase) {
    console.warn('Supabase not configured')
    return { data: [], error: null }
  }
  
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
