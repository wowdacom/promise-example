'use strict';

    function iterate(num) {
      console.log(num);
      return num + 1;
    }

    function alwaysThrows() {
      throw new Error('OH NOES');
    }

    function onReject(error) {
      console.log(error.message);
    }

    Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject);

// function alwaysThrows() {
//   throw new Error('OH NOES')
// }
//
//  iterate = function (integer) {
//   console.log(integer)
//   return integer + 1
// };
//
// Promise.resolve(1)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(alwaysThrows)
//   .catch((err)=>console.log(err.message))
