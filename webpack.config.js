const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const path = require('path');

module.exports = {
  mode,
  devtool: mode === 'production' ? '' : 'cheap-module-source-map',
  entry: './src/index',
  output: {
    filename: 'ereact-eredux.min.js',
    path: path.resolve(__dirname, 'public'),
    library: 'EreactEredux',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader'
      }
    ]
  }
}
