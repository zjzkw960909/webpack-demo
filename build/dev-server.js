const Webpack = require("webpack");
const webpackConfig = require("./webpack.config");
//const opn = require('opn');
const express = require('express');
const app = express()

const compiler = Webpack(webpackConfig);
app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true,
        hot: true
    }

}));
app.use(require("webpack-hot-middleware")(compiler));
let ip = 8888, url = "localhost", uri = url + ':' + ip
app.listen(ip, function() {
	console.log(`Starting server on ${uri}`);
    //opn(uri)
});

