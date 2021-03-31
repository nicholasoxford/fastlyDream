const vuePlugin = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
import WindiCSS from 'vite-plugin-windicss'

module.exports = {
  plugins: [
    vuePlugin(),
    WindiCSS(),
    vueJsx(),
  ],
  build: {
    minify: false
  }
}
