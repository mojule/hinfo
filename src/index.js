'use strict'

const elementData = require( '../data/elements.json' )

// ensure a fresh copy, in case the consumer modifies it
const hinfo = () => JSON.parse( JSON.stringify( elementData ) )

module.exports = hinfo
