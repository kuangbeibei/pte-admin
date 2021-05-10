const utils = require('./utils');

const BasicConfig = {
    entry: utils.ResolvePath('src/index'),
    output: {
        filename: 'bundle.js',
        path: utils.ResolvePath('dist')
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.s[a|c]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            Typings: utils.ResolvePath('src/typings')
        }
    },
}

module.exports = BasicConfig;