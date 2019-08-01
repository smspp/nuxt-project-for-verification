import path from 'path'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  vue: {
    config: {
      ignoredElements:[/^rs-/]
    }
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/rsmdc.client.js',
    '~plugins/v-model3.client.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   loaders: {
      scss: {
        includePaths: [
          path.resolve(__dirname, 'node_modules')
        ],
        data: `
          @import "~assets/variables";
          @import "@rsmdc/rsmdc/rsmdc.scss";
        `
      }
    }
  }
}