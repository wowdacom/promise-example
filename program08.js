
function attachTitle (title) {
  return 'DR. ' + title
}

var promise = new Promise((fulfill, rejected)=>{
  return fulfill('MANHATTAN')
})

promise.then(attachTitle).then(console.log)
