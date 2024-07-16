// webpack.prod.js
const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const baseConfig = require("./webpack.base.js");
// 在开发环境我们希望css嵌入在style标签里面,方便样式热替换,但打包时我们希望把css单独抽离出来,方便配置缓存策略
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 上面配置了打包时把css抽离为单独css文件的配置,打开打包后的文件查看,可以看到默认css是没有压缩的,需要手动配置一下压缩css的插件。
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 设置mode为production时,webpack会使用内置插件terser-webpack-plugin压缩js文件,该插件默认支持多线程压缩,
// 但是上面配置optimization.minimizer压缩css后,js压缩就失效了,需要手动再添加一下,
// webpack内部安装了该插件,由于pnpm解决了幽灵依赖问题,如果用的pnpm的话,需要手动再安装一下依赖
const TerserPlugin = require("terser-webpack-plugin");

// s中会有未使用到的代码,css中也会有未被页面使用到的样式,可以通过purgecss-webpack-plugin插件打包的时候移除未使用到的css样式,
// 这个插件是和mini-css-extract-plugin插件配合使用的,在上面已经安装过,还需要glob-all来选择要检测哪些文件里面的类名和id还有标签名称
const globAll = require("glob-all");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
module.exports = merge(baseConfig, {
  mode: "production", // 生产模式, 会开启tree-shaking和压缩代码,以及其他优化
  plugins: [
    // 复制文件插件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"), // 复制public下文件
          to: path.resolve(__dirname, "../dist"), // 复制到dist目录中
          filter: (source) => {
            return !source.includes("index.html"); // 忽略index.html
          },
        },
      ],
    }),
    // 抽离css插件
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css", // 抽离css的输出目录和名称
    }),
    // 清理无用css
    new PurgeCSSPlugin({
      // 检测src下所有tsx文件和public下index.html中使用的类名和id和标签名称
      // 只打包这些文件中用到的样式
      paths: globAll.sync([
        `${path.join(__dirname, "../src")}/**/*.tsx`,
        path.join(__dirname, "../public/index.html"),
      ]),
    }),
    new TerserPlugin({
      // 压缩js
      parallel: true, // 开启多线程压缩
      terserOptions: {
        compress: {
          pure_funcs: ["console.log"], // 删除console.log
        },
      },
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 压缩css
    ],

    // 一般第三方包的代码变化频率比较小,可以单独把node_modules中的代码单独打包,
    // 当第三包代码没变化时,对应chunkhash值也不会变化,可以有效利用浏览器缓存，
    // 还有公共的模块也可以提取出来,避免重复打包加大代码整体体积, webpack提供了代码分隔功能,
    // 需要我们手动在优化项optimization中手动配置下代码分隔splitChunks规则
    splitChunks: {
      // 分隔代码
      cacheGroups: {
        vendors: {
          // 提取node_modules代码
          test: /node_modules/, // 只匹配node_modules里面的模块
          name: "vendors", // 提取文件命名为vendors,js后缀和chunkhash会自动加
          minChunks: 1, // 只要使用一次就提取出来
          chunks: "initial", // 只提取初始化就能获取到的模块,不管异步的
          minSize: 0, // 提取代码体积大于0就提取出来
          priority: 1, // 提取优先级为1
        },
        commons: {
          // 提取页面公共代码
          name: "commons", // 提取文件命名为commons
          minChunks: 2, // 只要使用两次就提取出来
          chunks: "initial", // 只提取初始化就能获取到的模块,不管异步的
          minSize: 0, // 提取代码体积大于0就提取出来
        },
      },
    },
  },
});
