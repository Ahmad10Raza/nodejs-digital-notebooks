const fs = require('fs');

// Synchronous Renaming
try {
  fs.renameSync('path/to/oldFile.txt', 'path/to/newFile.txt');
  console.log('Synchronous File renamed successfully');
} catch (err) {
  console.error('Synchronous Error renaming file:', err);
}

// Asynchronous Renaming
fs.rename('path/to/oldFile.txt', 'path/to/newFile.txt', (err) => {
  if (err) {
    console.error('Asynchronous Error renaming file:', err);
    return;
  }
  console.log('Asynchronous File renamed successfully');
});

// Promises Renaming
const fsPromises = require('fs').promises;

async function renameFile() {
  try {
    await fsPromises.rename('path/to/oldFile.txt', 'path/to/newFile.txt');
    console.log('Promises File renamed successfully');
  } catch (err) {
    console.error('Promises Error renaming file:', err);
  }
}

renameFile();