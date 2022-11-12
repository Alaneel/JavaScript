const http = require('http');
const fs = require('fs'); // file system module
const port = 3000;

http.createServer((req, res) => {
    fs.readFile('hello.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'}); // set status code and MIME type
        res.write(data);
        res.end(); // end the response
    });
}).listen(port, () => console.log(`Server listening at port ${port}...`));