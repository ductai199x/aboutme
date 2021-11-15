module.exports = {
  reactStrictMode: true,
  experimental: {
    css: true
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  // assetPrefix: process.cwd() + "/out/"
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
}
