const prod = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  experimental: {
    css: true
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  // assetPrefix: process.cwd() + "/out/"
  basePath: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
}
