Pi
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Pi][pi].


## Installation

``` bash
$ npm install const-pi
```


## Usage

``` javascript
var pi = require( 'const-pi' );
```

#### pi

The mathematical constant [pi][pi].

``` javascript
pi === 3.141592653589793;
```


## Examples

``` javascript
var pi = require( 'const-pi' );

console.log( pi );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors..


[npm-image]: http://img.shields.io/npm/v/const-pi.svg
[npm-url]: https://npmjs.org/package/const-pi

[build-image]: http://img.shields.io/travis/const-io/pi/master.svg
[build-url]: https://travis-ci.org/const-io/pi

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/pi/master.svg
[coverage-url]: https://codecov.io/github/const-io/pi?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/pi.svg
[dependencies-url]: https://david-dm.org/const-io/pi

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/pi.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/pi

[github-issues-image]: http://img.shields.io/github/issues/const-io/pi.svg
[github-issues-url]: https://github.com/const-io/pi/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[pi]: https://en.wikipedia.org/wiki/Pi
