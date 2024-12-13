// Load the 'http' module from Node.js, which allows us to create a server
const { createServer } = require('node:http');
// import { createServer } from 'http';

// Define the hostname, which is like the address for the server
// 127.0.0.1 is a special address that represents your own computer (localhost)
const hostname = '127.0.0.1';

// Define the port number, like a specific door where the server will listen for requests
const port = 3000;

// Create the server using the 'createServer' function
// This function takes a callback, which means a function that will be called every time someone makes a request to the server
const server = createServer((req, res) => {

  // Set the status code for the response to 200, which means everything is OK
  res.statusCode = 200;

  // Set the content type of the response to 'text/plain', meaning we are sending plain text (not HTML or JSON)
  res.setHeader('Content-Type', 'text/plain');

  // End the response by sending back the text "Hello World"
  // After this line, the server sends the response back to the client (e.g., browser)
  res.end('Hello World');
});

// Start the server and tell it to listen on the specified hostname and port
// The listen function takes the port and hostname and a callback function
server.listen(port, hostname, () => {

  // This function runs once the server has successfully started
  // It prints a message to the console so we know the server is running
  console.log(`Server running at http://${hostname}:${port}/`);
});
