const prod = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: '',
  },
  // assetPrefix: process.cwd() + "/out/"
  basePath: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
}
