// testReadFile2.js
const fs = require('fs');

function myReadFile(callback) {
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        callback(null, data); // process the data upon completion of asynchronous readFile()
    });
};

myReadFile((err, data) => console.log(data));