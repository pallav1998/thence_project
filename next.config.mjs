/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
