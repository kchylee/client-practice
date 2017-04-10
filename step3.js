function getAndPrintHTML (options){
  var https = require("https");

  var buffer = [];
  https.get(options, function(response){
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

var requestOptions = {
    host: 'sytantris.github.io',
    path: 'http/examples/step1.html'
};

getAndPrintHTML(requestOptions);