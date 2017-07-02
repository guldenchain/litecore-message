<img src="http://bitcore.io/css/images/module-message.png" alt="guldencore message" height="35">
# Gulden Message Verification and Signing for Guldencore


[![NPM Package](https://img.shields.io/npm/v/guldencore-message.svg?style=flat-square)](https://www.npmjs.org/package/guldencore-message)
[![Build Status](https://img.shields.io/travis/guldenchain/guldencore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/guldenchain/guldencore-message)
[![Coverage Status](https://img.shields.io/coveralls/guldenchain/guldencore-message.svg?style=flat-square)](https://coveralls.io/r/guldenchain/guldencore-message?branch=master)

guldencore-message adds support for verifying and signing gulden messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main guldencore repo](https://github.com/guldenchain/guldencore) for more information.

## Getting Started

```sh
npm install guldencore-message
```

```sh
bower install guldencore-message
```

To sign a message:

```javascript
var guldencore = require('guldencore-lib');
var Message = require('guldencore-message');

var privateKey = guldencore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/guldenchain/guldencore/blob/master/CONTRIBUTING.md) on the main guldencore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/guldenchain/guldencore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Gulden Core Developers

