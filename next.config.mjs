/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.stc.com.bh",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
