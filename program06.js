(function(){

//  var promise = new Promise((fulfill, rejected)=>{
//    fulfill('SECRET VALUE');
//  })

//  var promise = Promise.resolve('SECRET VALUE');

//  var promise = new Promise(function (fullfill, rejected) {
//    reject(new Error('SECRET VALUE'))
//  });

  var promise = Promise.reject(new Error('SECRET VALUE'));

  promise.catch((error)=>{
    console.log(error.message)
  })

}).call(this)


// 'use strict';
//
//     var message;
//     var promise;
//
//     function randomBytes(n) {
//       return (Math.random() * Math.pow(256, n) | 0).toString(16);
//     }
//
//     message =
//       'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
//       randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
//       'terminated in 3 seconds.';
//
//     promise = Promise.reject(new Error(message));
//
//     promise.catch(function (err) {
//       var i = 3;
//
//       process.stderr.write(err.message);
//
//       setTimeout(function boom() {
//         process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
//         if (!i) {
//           process.stderr.write('\n..... . . . boom . . . .....\n');
//         } else {
//           setTimeout(boom, 1000);
//         }
//       }, 1000);
//     });


//Promise 兩種寫法比較
// promise.then(null, function (err) {
//   console.error('THERE IS AN ERROR!!!');
//   console.error(err.message);
// });
//
// You could simply write
//
// promise.catch(function (err) {
//   console.error('THERE IS AN ERROR!!!');
//   console.error(err.message);
// });
