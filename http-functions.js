module.exports = function getHTML (options, callback) {
    /* Your code here */
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

};