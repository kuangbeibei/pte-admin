const utils = require('./utils');

const BasicConfig = {
    entry: utils.ResolvePath('index'),
    output: {
        filename: 'bundle.js',
        path: utils.ResolvePath('dist')
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
}

module.exports = BasicConfig;