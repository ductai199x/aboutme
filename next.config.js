module.exports = {
  reactStrictMode: true,
  experimental: {
    css: true
  },
  images: {
    loader: 'imgix',
    path: '',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aboutme/' : '',
}
