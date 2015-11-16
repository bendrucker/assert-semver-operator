'use strict'

var test = require('tape')
var path = require('path')
var child = require('child_process')
var assertOperator = require('./')
var cli = path.resolve(__dirname, 'cli.js')

test('valid', function (t) {
  t.plan(1)
  var valid = path.resolve(__dirname, 'fixtures/valid')
  assertOperator(valid, '~', function (err) {
    t.notOk(err)
  })
})

test('invalid', function (t) {
  t.plan(2)
  var valid = path.resolve(__dirname, 'fixtures/invalid')
  assertOperator(valid, '~', function (err) {
    t.ok(err)
    t.equal(err.message, '"^" dependencies are not allowed (foo)')
  })
})

test('valid cli', function (t) {
  t.plan(1)

  var args = [cli, './fixtures/valid', '~']
  var options = {encoding: 'utf-8'}
  child.execFile('node', args, options, function (err, stdout) {
    if (err) return t.end(err)
    t.notOk(stdout.trim())
  })
})

test('invalid cli', function (t) {
  t.plan(2)

  var args = [cli, './fixtures/invalid', '~']
  var options = {encoding: 'utf-8'}
  child.execFile('node', args, options, function (err) {
    t.ok(err)
    t.ok(/dependencies/.test(err.message))
  })
})
