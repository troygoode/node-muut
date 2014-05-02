/*jslint indent: 2*/
/*global require: true, module: true, Buffer: true*/

(function () {
  'use strict';

  var crypto = require('crypto');

  function encodeBase64(str) {
    return (new Buffer(str)).toString('base64');
  }

  function encodeSHA1(str) {
    var sum = crypto.createHash('sha1');
    sum.update(str);
    return sum.digest('hex');
  }

  module.exports = function (secret, user) {
    var timestamp = Math.round(new Date().getTime() / 1000),
      message = encodeBase64(JSON.stringify({user: user}));
    return {
      timestamp: timestamp,
      message: message,
      signature: encodeSHA1(secret + ' ' + message + ' ' + timestamp)
    };
  };

}());

