var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
}

var upperCase = function(data){
for (i in data){
  console.log(data[i].toUpperCase());
}
}

getHTML(requestOptions, upperCase);