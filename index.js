'use strict'

var assert = require('assert-ok')
var operators = require('semver-operators')
var format = require('simple-format')

var opposites = {
  '~': '^',
  '^': '~'
}

module.exports = function assertOperator (pkgName, operator, callback) {
  assert(Object.prototype.hasOwnProperty.call(opposites, operator), 'Invalid operator. ~ and ^ are allowed.')
  operators(pkgName, function (err, operators) {
    if (err) return callback(err)
    var opposite = opposites[operator]
    var packages = operators[opposite]
    if (packages.length) {
      return callback(new Error(format('"%s" dependencies are not allowed (%s)', opposite, packages.join(', '))))
    }
    callback(null)
  })
}
