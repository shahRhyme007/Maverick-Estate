/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add distDir to ensure proper build directory handling
  distDir: '.next',
  // Ensure proper development mode handling
  reactStrictMode: true,
};

module.exports = nextConfig;