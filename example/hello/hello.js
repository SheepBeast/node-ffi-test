var ffi = require('../../')

var libhello = ffi.Library('./hello', {
    'hello': ['void', []]
})



var output = libhello.hello()

console.log('Your output: ' + output)
