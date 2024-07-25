const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    // Collect data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // End of data
    req.on('end', () => {
      // Parse the data (assuming it's JSON)
      const parsedData = JSON.parse(body);

      // Log the parsed data
      console.log(parsedData);

      // Send a response
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Data received', data: parsedData }));
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Specify the port to listen on
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});