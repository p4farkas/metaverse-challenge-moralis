/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images8.alphacoders.com",
      "static.vecteezy.com",
      "upload.wikimedia.org",
      "avatars.dicebear.com"
    ],
  },
  env: {
    MORALIS_APP_ID: process.env.MORALIS_APP_ID,
    MORALIS_SERVER_URL: process.env.MORALIS_SERVER_URL,
  },
};

module.exports = nextConfig;
