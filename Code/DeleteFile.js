const fs = require('fs');

// Synchronous Deletion
try {
  fs.unlinkSync('path/to/file.txt');
  console.log('Synchronous File deleted successfully');
} catch (err) {
  console.error('Synchronous Error deleting file:', err);
}

// Asynchronous Deletion
fs.unlink('path/to/file.txt', (err) => {
  if (err) {
    console.error('Asynchronous Error deleting file:', err);
    return;
  }
  console.log('Asynchronous File deleted successfully');
});

// Promises Deletion
const fsPromises = require('fs').promises;

async function deleteFile() {
  try {
    await fsPromises.unlink('path/to/file.txt');
    console.log('Promises File deleted successfully');
  } catch (err) {
    console.error('Promises Error deleting file:', err);
  }
}

deleteFile();