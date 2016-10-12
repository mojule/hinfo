'use strict';

var elementData = require('../data/elements.json');

// ensure a fresh copy, in case the consumer modifies it
var hinfo = function hinfo() {
  return JSON.parse(JSON.stringify(elementData));
};

module.exports = hinfo;