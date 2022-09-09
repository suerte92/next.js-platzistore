/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space',
    'vuzoon.com','www.complementosdelcafe.com'],
  },
}

module.exports = nextConfig
