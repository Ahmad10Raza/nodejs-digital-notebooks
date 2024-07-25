const url = require('url');
const { URL, URLSearchParams } = require('url');

// Legacy URL API
const legacyParsedURL = url.parse('https://example.com:8080/path/name?query=string#hash');
console.log('Legacy Parsed URL:', legacyParsedURL);

const legacyFormattedURL = url.format(legacyParsedURL);
console.log('Legacy Formatted URL:', legacyFormattedURL);

const legacyResolvedURL = url.resolve('https://example.com/path/', 'subpath/file.html');
console.log('Legacy Resolved URL:', legacyResolvedURL);

// WHATWG URL API
const myURL = new URL('https://example.com:8080/path/name?query=string#hash');
console.log('WHATWG URL:', myURL.href);
console.log('WHATWG Origin:', myURL.origin);
console.log('WHATWG Protocol:', myURL.protocol);
console.log('WHATWG Host:', myURL.host);
console.log('WHATWG Pathname:', myURL.pathname);
console.log('WHATWG Search:', myURL.search);
console.log('WHATWG Hash:', myURL.hash);

const params = new URLSearchParams(myURL.search);
params.append('newParam', 'newValue');
console.log('WHATWG URLSearchParams:', params.toString());