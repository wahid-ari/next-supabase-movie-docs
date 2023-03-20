const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    BASE_URL: "http://localhost:3001",
    SITE_URL: "localhost:3001",
    // API_URL: "https://my-musicc.vercel.app",
  }
};

module.exports = withNextra(nextConfig)