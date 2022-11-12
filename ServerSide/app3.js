// app3.js
const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text-html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text-html'});
        res.write(data);
        return res.end();
    });
}).listen(port, () => console.log(`Server listening at port ${port}...`));