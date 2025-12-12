import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: isProd ? "export" : undefined,
  assetPrefix: isProd ? "." : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
