/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita exportação estática
  images: {
    unoptimized: true, // Necessário para GitHub Pages
  },
}

module.exports = nextConfig