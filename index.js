
/*
 * Primary file for tool
 *
 */

// Dependencies
const http = require('http');

 // Configure the server to respond to all requests with a string
const server = http.createServer(function(req,res){
  res.end('Hello World!\n');
});

// Start the server
server.listen(process.env.PORT || 3001,function(){
  console.log('The server is up and running now');
});
