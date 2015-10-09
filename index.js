'use strict';

let path = require('path');

module.exports = function(options) {
  options = (options || {});

  if (!options.prefix) {
    throw (new Error('The "prefix" option is required'));
  }

  return function (value, name, args) {
    if (name === 'url') {
      return path.join(options.prefix, args[0]);
    } else {
      return value;
    }
  };
};
