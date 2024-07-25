const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle different routes
  if (pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the Home Page!\n');
  } else if (pathname === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the About Page!\n');
  } else if (pathname === '/contact') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the Contact Page!\n');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found\n');
  }
});

// Specify the port to listen on
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});