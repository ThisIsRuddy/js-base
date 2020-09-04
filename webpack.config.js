const path = require('path');
const Dotenv = require('dotenv-webpack');
const Nodemon = require('nodemon-webpack-plugin');

module.exports = {
    target: 'node',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new Dotenv(),
        new Nodemon()
    ]
}
