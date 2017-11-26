var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            'babel-polyfill',
            './js/pie/nightingale'
        ]
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },{
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.(jpe?g|png|gif)$/,
                use: ['url-loader?limit=10000&name=img/[hash:8].[name].[ext]']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Echarts',
            filename: 'build/echarts.html',
            template: './index.html',
            inject: 'body',
            hash: true,
            chunks: ['index']
        })
    ]
}