// testReadFile1.js
const fs = require('fs');
var content;

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
    content = data;
});

// readFile() is asynchronous. The callback executes when the file loading has completed
// Node continues the next statement without waiting for readFile() to complete
console.log(content);
// undefined