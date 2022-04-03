const fs = require('fs');
const http = require('http');
const { fileLogger } = require('./utils/file-seeker.js');
const { init, warn, error } = require('./utils/logger');

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
    fileLogger('request', req.url)
    if(req.url == '/'){
        fs.createReadStream('index.html').pipe(res);
    } else if(req.url == '/favicon.ico'){
        fs.createReadStream('favicon.ico').pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT,() => { 
    init(`listening ${PORT}`);
});
