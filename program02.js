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

//正確解答
//
//'use strict';

    // Create a promise

    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, fulfill the promise with value
      // 'FULFILLED!'.

      setTimeout(function () {
        fulfill('FULFILLED!');
      }, 300);
    });

    // Add a handler to the promise’s fulfillment. `console.log` will be called
    // with the value passed to `fulfill`, which is `'FULFILLED!'`.
    // Note that this statement will ALWAYS be executed before `fulfill` is
    // called (we'll talk about this in depth in the lessons to come).

    promise.then(console.log);
