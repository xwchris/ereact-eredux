'use strict';

let EReactERedux = null;

if (process.env.NODE_ENV === 'production') {
  EReactERedux = require('./dist/ereact-eredux.production.js');
} else {
  EReactERedux = require('./dist/ereact-eredux.development.js');
}

module.exports = EReactERedux.default || EReactERedux;
