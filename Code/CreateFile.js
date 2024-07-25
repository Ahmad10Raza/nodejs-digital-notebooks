const fs = require('fs');

// Synchronous Creation
try {
  fs.writeFileSync('path/to/file.txt', 'Hello, world!', 'utf8');
  console.log('Synchronous File created successfully');
} catch (err) {
  console.error('Synchronous Error creating file:', err);
}

// Asynchronous Creation
fs.writeFile('path/to/file.txt', 'Hello, world!', 'utf8', (err) => {
  if (err) {
    console.error('Asynchronous Error creating file:', err);
    return;
  }
  console.log('Asynchronous File created successfully');
});

// Promises Creation
const fsPromises = require('fs').promises;

async function createFile() {
  try {
    await fsPromises.writeFile('path/to/file.txt', 'Hello, world!', 'utf8');
    console.log('Promises File created successfully');
  } catch (err) {
    console.error('Promises Error creating file:', err);
  }
}

createFile();