const {
    merge
} = require('webpack-merge');
const HtmlWebpakPlugin = require('html-webpack-plugin');
const BaseConfig = require('./webpack.base.config');
const utils = require('./utils');

module.exports = merge(BaseConfig, {
    mode: 'development',
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpakPlugin({
            template: utils.ResolvePath('public/index.html')
        })
    ]
})