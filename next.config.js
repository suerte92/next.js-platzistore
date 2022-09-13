/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space',
    'vuzoon.com','www.complementosdelcafe.com'],
  },
};

const withPWA = require('next-pwa')({  
    dest: 'public',
    register: true,
    mode: 'production',
    disable: process.env.NODE_ENV === 'development',
});


module.exports = withPWA(nextConfig);
