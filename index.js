'use strict';

var supermarked = require('supermarked');

exports.name = 'supermarked';
exports.outputFormat = 'html';
exports.render = function (str, options) {
  return supermarked(str, options);
};
