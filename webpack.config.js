const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
      filename: 'app.js',
      path: path.join(__dirname, '/static')
    },
    module: {
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
};