'use strict';

// var promise = new Promise(function (fulfill, reject) {
// setTimeout(function () {
//   var Error = {message: 'REJECTED!', stack: ''}
//   reject(Error);
//   }, 300);
// });
//
// function onReject (error) {
//   return console.log(error.message);
// }
//
// promise.then(fulfill=>{
//   console.log(fulfill)
// }, reason => {
//  throw(reason)
// }).catch((message)=>{
//   onReject(message)
// });

(function() {
  'use strict';
  var onReject, promise;

  promise = new Promise(function(fulfill, reject) {
    return setTimeout(function() {
      return reject(new Error('REJECTED!'));
    }, 300);
  });

  onReject = function(error) {
    return console.log(error.message);
  };

  promise.then(console.log, onReject);

}).call(this);
