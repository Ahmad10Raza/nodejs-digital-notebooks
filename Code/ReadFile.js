const fs = require('fs');

// Synchronous Reading
try {
  const dataSync = fs.readFileSync('../Data/NikolaTesla.txt', 'utf8');
  console.log('Synchronous Read:', dataSync);
} catch (err) {
  console.error('Synchronous Error:', err);
}

// Asynchronous Reading
fs.readFile('../Data/NikolaTesla.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Asynchronous Error:', err);
    return;
  }
  console.log('Asynchronous Read:', data);
});

// Promises Reading
const fsPromises = require

('fs').promises;

async function readFile() {
  try {
    const data = await fsPromises.readFile('../Data/NikolaTesla.txt', 'utf8');
    console.log('Promises Read:', data);
  } catch (err) {
    console.error('Promises Error:', err);
  }
}

readFile();