const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const path = require('path');

module.exports = {
  mode,
  devtool: mode === 'production' ? 'nosources-source-map' : 'cheap-eval-source-map',
  entry: './src/index',
  output: {
    filename: `ereact-eredux.${mode}.js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'EReactERedux',
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
