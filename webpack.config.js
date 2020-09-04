const path = require('path');
const Dotenv = require('dotenv-webpack');
const Nodemon = require('nodemon-webpack-plugin');

module.exports = (env, argv) => ({
    mode: argv.mode || 'development',
    target: 'node',
    entry: './src/index.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new Dotenv({
            path: `.env.${argv.mode}`
        }),
        new Nodemon()
    ]
})
