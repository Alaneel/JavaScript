const fs = require('fs');
fs.appendFile('test.txt', 'hello 456\n', (err) => {
    if (err) throw err;
    console.log('appendfile() done...');
});