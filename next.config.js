const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/components/Login',
      },
      {
        source: '/dashboard',
        destination: '/components/Dashboard',
      },
    ];
  },
};

module.exports = nextConfig;
