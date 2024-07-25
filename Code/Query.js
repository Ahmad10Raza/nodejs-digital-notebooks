const http = require('http');
const url = require('url');
const querystring = require('querystring');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url);
  
  // Extract the query string
  const query = querystring.parse(parsedUrl.query);
  
  // Log the query object to the console
  console.log(query);
  
  // Send a response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(query));
});

// Specify the port to listen on
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});