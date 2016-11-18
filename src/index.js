'use strict'

const elementData = require( '../data/elements.json' )
const schema = require( '../data/element.schema.json' )

// ensure a fresh copy, in case the consumer modifies it
const hinfo = () => JSON.parse( JSON.stringify( elementData ) )

hinfo.schema = () => JSON.parse( JSON.stringify( schema ) )

module.exports = hinfo
