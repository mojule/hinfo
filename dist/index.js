'use strict';

var elementData = require('../data/elements.json');
var schema = require('../schema/hinfo.schema.json');

// ensure a fresh copy, in case the consumer modifies it
var hinfo = function hinfo() {
  return JSON.parse(JSON.stringify(elementData));
};

hinfo.schema = function () {
  return JSON.parse(JSON.stringify(schema));
};

module.exports = hinfo;