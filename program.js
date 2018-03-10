'use strict';

require('es6-promise')

var os = require('os');
os.tmpDir = os.tmpdir;

var promise = new Promise((fulfill, reject)=>{
  setTimeout(fulfill, 300, 'FULFILLED!')
})

promise.then((value)=>{
  console.log(value)
})

