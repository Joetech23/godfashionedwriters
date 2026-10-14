/** @type {import('next').NextConfig} */

// GitHub Pages serves project sites from /<repo>; the deploy workflow sets BASE_PATH.
// Leave it unset for local dev or a custom domain.
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
