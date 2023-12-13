const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
        preload: 'src/preload.js',
    }
},
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ]
  }
})
