const http = require('http');

const PORT = 3000;
const hostname = '127.0.0.1'

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello NITDEV 3.1');
})

server.listen(PORT,hostname, () => {
  console.log(`Server is running on url http://${hostname}:${PORT}`);
});