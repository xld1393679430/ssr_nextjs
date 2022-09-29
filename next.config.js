const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ["**"], //  domains不支持任意匹配功能
    remotePatterns: [
      {
        hostname: "**", // 这种方式可以加载任何域名下的图片资源
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };

    return config;
  },
};

module.exports = nextConfig;
