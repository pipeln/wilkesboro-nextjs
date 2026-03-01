/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Enable for self-hosting with Docker
  experimental: {
    // Optional: Enable if you need server actions
    // serverActions: true,
  },
}

module.exports = nextConfig
