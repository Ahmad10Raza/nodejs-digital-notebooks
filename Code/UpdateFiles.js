const fs = require('fs');

// Synchronous Update
try {
  fs.appendFileSync('path/to/file.txt', '\nUpdated content', 'utf8');
  console.log('Synchronous File updated successfully');
} catch (err) {
  console.error('Synchronous Error updating file:', err);
}

// Asynchronous Update
fs.appendFile('path/to/file.txt', '\nUpdated content', 'utf8', (err) => {
  if (err) {
    console.error('Asynchronous Error updating file:', err);
    return;
  }
  console.log('Asynchronous File updated successfully');
});

// Promises Update
const fsPromises = require('fs').promises;

async function updateFile() {
  try {
    await fsPromises.appendFile('path/to/file.txt', '\nUpdated content', 'utf8');
    console.log('Promises File updated successfully');
  } catch (err) {
    console.error('Promises Error updating file:', err);
  }
}

updateFile();