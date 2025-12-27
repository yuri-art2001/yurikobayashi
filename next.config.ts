/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/yurikobayashi',
  assetPrefix: '/yurikobayashi/',
};

module.exports = nextConfig;
