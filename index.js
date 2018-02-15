'use strict'

const supermarked = require('supermarked')
const extend = require('extend-shallow')

exports.name = 'supermarked'
exports.outputFormat = 'html'
exports.inputFormats = ['supermarked', 'markdown', 'md']

exports.render = function (str, options, locals) {
  return supermarked(str, extend({}, options, locals))
}
