/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  basePath: '/yurikobayashi',
  assetPrefix: '/yurikobayashi/',
};

module.exports = nextConfig;
