const http = require('http');
const fs = require('fs');
const path = require('path');

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.json': 'application/json',
  '.txt': 'text/plain'
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  let filePath = 'HTML' + req.url;
  if (filePath === 'HTML/') {
    filePath = 'HTML/HelloWorld.html'; // Default to index.html
  }

  // Get the file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Read the requested file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found, respond with 404
        fs.readFile('HTML/404.html', (err, data) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(data, 'utf-8');
        });
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Serve the file content
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});