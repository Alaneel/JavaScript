// testReadFile3.js
const fs = require('fs');
const content = fs.readFileSync('test.txt', 'utf8'); // without the encoding='utf8', the raw buffer is returned
console.log(content);