require('es6-promise')

function parsePromised (insert) {
  return new Promise((fulfill, reject)=>{
    try {
      fulfill(JSON.parse(insert))
    } catch (e) {
      reject(e)
    }
  })
}

function onReject(error) {
  console.log(error.message);
}

// parsePromised(process.argv[2])
  // .then(null, onReject);
// 遇到 TypeError: Cannot read property 'pipe' of undefined 問題
// 解法 https://github.com/stevekane/promise-it-wont-hurt/issues/134
//
parsePromised(process.argv[2]).catch(onReject);
