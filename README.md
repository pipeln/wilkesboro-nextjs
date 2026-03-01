# Wilkesboro Today - Next.js

Modern Next.js 14 website for Wilkesboro Today with dynamic data from Supabase.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for dynamic data
- **Static Export** for fast deployment
- **Real-time Weather** from Open-Meteo API

## 📦 Installation

```bash
npm install
```

## 🔧 Configuration

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 🏃 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy to Vercel

```bash
npx vercel --prod
```

## 📁 Project Structure

```
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── news/           # News routes
├── events/         # Events routes
└── jobs/           # Jobs routes
components/         # React components
lib/
├── supabase.ts     # Supabase client
└── utils.ts        # Utility functions
public/             # Static assets
```

## 📝 License

MIT License
