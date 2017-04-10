function getAndPrintHTML (){
  var https = require("https");

  var requestOptions = {
    host: 'sytantris.github.io',
    path: 'http/examples/step1.html'
  };

  var buffer = [];
  https.get(requestOptions, function(response){
    response.setEncoding("utf-8");
    response.on("data", function(data){
      buffer.push(data);
    })
    response.on("error", function(err){
      console.log("An error occurred: " + err);
    })
    response.on("end", function(){
      for (i in buffer){
        console.log(buffer[i] + "\n");
      }
    })
  })
}

getAndPrintHTML();