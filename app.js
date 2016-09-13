/* app.js 
var lodash = require('lodash');
 
var output = lodash.without([1, 2, 3], 1);
console.log(output);
*/


var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


//https://www.amazon.com/Apple-MF841LL-13-3-Inch-dual-core-processor/dp/B00UGBWR0E