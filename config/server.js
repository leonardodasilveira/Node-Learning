const http = require('http');
const app = require('../app');

//handle port options
const port = process.env.PORT || 3000;

//express function that manages servers
const server = http.createServer(app);

//start the server
server.listen(port);