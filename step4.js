function getHTML (options, callback) {

  /* Add your code here */
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
      callback(buffer);
      })
    })
}

function printHTML (html) {
  for (i in html){
        console.log(html[i] + "\n");
  }
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);