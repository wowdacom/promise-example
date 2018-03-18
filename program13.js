"use strict";

var qhttp = require("q-io/http");

qhttp.read("http://localhost:7000")
  .then((content)=>{return content.toString()})
  .then((userId)=>{return qhttp.read('http://localhost:7001/' + userId)})
  .then(JSON.parse)
  .then(console.log)
  .catch(console.error)
  .done()

//answer
  // var qhttp = require('q-io/http');
  //
  //     qhttp.read("http://localhost:7000/")
  //     .then(function (id) {
  //       return qhttp.read("http://localhost:7001/" + id);
  //     })
  //     .then(function (json) {
  //       console.log(JSON.parse(json));
  //     })
  //     .then(null, console.error)
  //     .done();
