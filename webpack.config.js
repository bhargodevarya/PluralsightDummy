var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/app');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: BUILD_DIR,
        historyApiFallback: true,
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader',
            query: {
                presets: ['babel-preset-es2015', 'react']
            }
        }]
    }
}

module.exports = config