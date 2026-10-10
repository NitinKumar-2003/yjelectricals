import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "home.iitd.ac.in",
      },
      {
        protocol: "https",
        hostname: "cache.careers360.mobi",
      },
      {
        protocol: "https",
        hostname: "static.toiimg.com",
      },
      {
        protocol: "https",
        hostname: "images.shiksha.com",
      },
    ],
  },
};

export default nextConfig;
