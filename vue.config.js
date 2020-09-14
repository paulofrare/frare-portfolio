module.exports = {

  publicPath: process.env.NODE_ENV === 'production'
    ? '/frare-portfolio/'
    : '/',

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
