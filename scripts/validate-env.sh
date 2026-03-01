#!/bin/bash

# Validate required environment variables before build

if [ -z "$NEXT_PUBLIC_SUPABASE_URL" ]; then
  echo "❌ ERROR: NEXT_PUBLIC_SUPABASE_URL is not set"
  echo "Please set this in your Vercel project settings:"
  echo "  Settings → Environment Variables → NEXT_PUBLIC_SUPABASE_URL"
  exit 1
fi

if [ -z "$NEXT_PUBLIC_SUPABASE_ANON_KEY" ]; then
  echo "❌ ERROR: NEXT_PUBLIC_SUPABASE_ANON_KEY is not set"
  echo "Please set this in your Vercel project settings:"
  echo "  Settings → Environment Variables → NEXT_PUBLIC_SUPABASE_ANON_KEY"
  exit 1
fi

echo "✅ All environment variables are set"
echo "   NEXT_PUBLIC_SUPABASE_URL: ${NEXT_PUBLIC_SUPABASE_URL:0:30}..."
echo "   NEXT_PUBLIC_SUPABASE_ANON_KEY: ${NEXT_PUBLIC_SUPABASE_ANON_KEY:0:20}..."
