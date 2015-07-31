# jstransformer-supermarked

[Supermarked](https://www.npmjs.com/package/supermarked) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-supermarked/master.svg)](https://travis-ci.org/jstransformers/jstransformer-supermarked)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-supermarked/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-supermarked?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-supermarked/master.svg)](http://david-dm.org/jstransformers/jstransformer-supermarked)
[![NPM version](https://img.shields.io/npm/v/jstransformer-supermarked.svg)](https://www.npmjs.org/package/jstransformer-supermarked)

## Installation

    npm install jstransformer-supermarked

## API

```js
var supermarked = require('jstransformer')(require('jstransformer-supermarked'))

supermarked.render('# Hello World').body
//=> '<h1>Hello World</h1>'
```

## License

MIT
