const fs = require('fs');
fs.writeFile('test.txt', 'hello 123\n', (err) => {
    if (err) throw err;
    console.log('writefile() done...');
});