import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/Nanda-Portfolio',
  basePath: '/Nanda-Portfolio'
};

export default nextConfig;
