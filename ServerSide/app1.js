// app1.js
const http = require('http');
http.createServer((req, res) => {
    res.end('hello, world'); // write and end the response
}).listen(3000, () => console.log('Server listening at port 3000...'));