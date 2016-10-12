# hinfo

Data about HTML5 elements, gathered from MDN, WHATWG etc.

## usage

```javascript
const hinfo = require( 'hinfo' )

// exported as a function so that you can modify or extend the data if you need
// to and still be able to get the original data by calling the function again
const info = hinfo()

console.log( info.div )
```

## license

MIT
