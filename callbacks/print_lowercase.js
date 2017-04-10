var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}

var lowerCase = function(data){
for (i in data){
  console.log(data[i].toLowerCase());
}
}

getHTML(requestOptions, lowerCase);