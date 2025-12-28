/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/yurikobayashi',
  assetPrefix: '/yurikobayashi/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

