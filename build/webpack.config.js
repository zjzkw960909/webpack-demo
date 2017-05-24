var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin') //生成html模版
function resolve (dir) { //配置绝对路径
    return path.join(__dirname, '..', dir)
}
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry: {
        app: [resolve('app') + "/main.js", 'webpack-hot-middleware/client?reload=true'],//应用程序入口
        vendor: ['vue', 'webpack-hot-middleware/client?reload=true'] //第三方库入口
    },
    output: {
        path: resolve('public'),//打包后的文件存放的地方
        filename: "[name].[hash].js",//打包后输出文件的文件名
        publicPath: 'http://localhost:8888/' 
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'], //省略后缀
        alias: { //解决bug
            'vue$': 'vue/dist/vue.esm.js', 
            '@': resolve('app'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'images/[hash:8].[name].[ext]' //打包后的地址
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] //提取第三方库，manifest防止写业务代码时编译第三方库
        }), 
        new HtmlWebpackPlugin({ //生成插件
            title: '开发环境',
            template: resolve('/') + 'index.html' // 模板路径,
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载
        new webpack.NoErrorsPlugin() //热加载
    ]
}
