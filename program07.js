first()
  .then((fulfill, rejected)=>{
     return second(fulfill)
  })
  .then((onFulfill, onRejected)=>{
     console.log(onFulfill)
  })


