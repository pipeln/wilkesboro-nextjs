# Wilkesboro Today - Next.js 14

Modern, self-hostable Next.js 14 website for Wilkesboro Today with dynamic data from Supabase.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for dynamic data
- **Docker** support for self-hosting
- **Nginx** reverse proxy configuration
- **API Routes** for news, weather, health checks
- **Production-ready** with security headers

## 📦 Self-Hosting with Docker

### Quick Start

```bash
# Clone the repository
git clone https://github.com/pipeln/wilkesboro-nextjs.git
cd wilkesboro-nextjs

# Copy environment file
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Build and run with Docker Compose
docker-compose up -d
```

### Production Deployment with Nginx

```bash
# Start with production profile (includes Nginx)
docker-compose --profile production up -d
```

### Manual Docker Build

```bash
# Build the image
docker build -t wilkesboro-nextjs .

# Run the container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your-url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key \
  wilkesboro-nextjs
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Nginx SSL Setup

1. Place your SSL certificates in `./ssl/`:
   - `cert.pem` - SSL certificate
   - `key.pem` - Private key

2. Update `nginx.conf` with your domain

## 🏃 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deploy to Vercel

```bash
npx vercel --prod
```

## 📁 Project Structure

```
app/
├── api/            # API routes
│   ├── health/     # Health check endpoint
│   ├── news/       # News API
│   └── weather/    # Weather API
├── news/           # News page
├── events/         # Events page
├── jobs/           # Jobs page
├── layout.tsx      # Root layout
├── page.tsx        # Home page
└── globals.css     # Global styles
components/         # React components
lib/
├── supabase.ts     # Supabase client
└── utils.ts        # Utility functions
public/             # Static assets
Dockerfile          # Docker configuration
docker-compose.yml  # Docker Compose setup
nginx.conf          # Nginx reverse proxy config
```

## 🔒 Security Features

- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Non-root Docker user
- Health check endpoint
- Gzip compression
- SSL/TLS ready

## 📝 License

MIT License
# Deploy Sun Mar  1 11:32:35 AM CST 2026
