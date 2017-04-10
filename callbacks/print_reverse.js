var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

var reverse = function(data){
for (i in data){
  console.log(data[i].split("").reverse().join(""));
}
}

getHTML(requestOptions, reverse);