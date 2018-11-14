# assert-semver-operator [![Build Status](https://travis-ci.org/bendrucker/assert-semver-operator.svg?branch=master)](https://travis-ci.org/bendrucker/assert-semver-operator) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/assert-semver-operator.svg)](https://greenkeeper.io/)

> Assert that a package adheres to a semver operator


## Install

```
$ npm install --save assert-semver-operator
```


## Usage

```js
var assertOperator = require('assert-semver-operator')

assertOperator('.', '~', function (err) {
  //=> null/Error
})
```

```sh
assert-operator . "~"
```

## API

#### `assertOperator(package, operator, callback)` -> `undefined`

##### package

*Required*  
Type: `string`

A path to a local package (dot or slash prefixed) or an npm package name.

##### operator

*Required*  
Type: `string`

A semver operator to require (~ or ^). Unmatched semver strings (like exact versions or `2.x`) will be considered valid.

##### callback

*Required*  
Type: `function`  
Arguments: `err`

A callback to call when the package has been validated. If an invalid operator was detected, the error message will specify the invalid packages.

## License

MIT © [Ben Drucker](http://bendrucker.me)
