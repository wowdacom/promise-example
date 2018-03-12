
  'use strict';

      var promise = new Promise(function (fulfill, reject) {
          fulfill('I FIRED')
          reject(new Error('I DID NOT FIRE'));
      });

      function onRejected(error) {
        return console.log(error.message);
      }

      promise.then(console.log, onRejected)


// (function() {
//   'use strict';
//   var onRejected, promise;
//
//   promise = new Promise(function(fulfill, reject) {
//     fulfill('I FIRED');
//     return reject(new Error('I DID NOT FIRE'));
//   });
//
//   onRejected = function(error) {
//     return console.log(error.message);
//   };
//
//   promise.then(console.log, onRejected);
//
// }).call(this);
