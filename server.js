const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log('Join host server');
    res.write('<h1>Hello World</h1>');
    res.write('<p>MD18309<p>');
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <style>
            h1 {
                color: red;
            }
    
            h2 {
                color: purple;
            }
    
            h3 {
                color: brown;
            }
        </style>
    </head>
    <body>
        <h1>HTML 5 - Content 1</h1>
        <h2>HTML 5 - Content 2</h2>
        <h3>HTML 5 - Content 3</h3>
    </body>
    </html>`);
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});