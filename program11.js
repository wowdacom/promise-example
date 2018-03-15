function all(argv1, argv2) {
  var counter = 0
  var results = []
  var promise = new Promise((fulfill, reject)=>{
    var markAsResolve = function (index, result) {
      counter++
      results[index] = result
      if (counter == 2) {
        fulfill(results)
      }
    }
    argv1.then((result)=>{
      markAsResolve(0, result)
    })
    argv2.then((result)=>{
      markAsResolve(1, result)
    })
  })

  return promise
}

all(getPromise1(), getPromise2()).then(console.log).catch(console.error)

//all(getPromise1(), getPromise2())
