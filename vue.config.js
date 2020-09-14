module.exports = {

  publicPath: process.env.NODE_ENV === 'production'
    ? '/paulofrare/'
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
