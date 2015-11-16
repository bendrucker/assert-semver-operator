#!/usr/bin/env node

'use strict'

var assertOperator = require('./')
var meow = require('meow')
var fail = require('cli-fail')
var filter = require('filter-pipe')

var cli = meow({
  help: [
    'Usage',
    '  assert-operator <package>'
  ]
})

var pkgName = cli.input[0]
var operator = cli.input[1]

if (!pkgName) fail('Package name is required')
if (!operator) fail('semver operator is required (~ or ^)')

assertOperator(pkgName, operator, filter(Boolean, fail))
