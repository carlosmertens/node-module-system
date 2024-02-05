// Path Module
const path = require('path');

const pathObj = path.parse(__dirname);
console.log({ pathObj });

// OS (Operating System) Module
const os = require('os');

const totalMemory = os.totalmem();
console.log({ totalMemory });

const freeMemory = os.freemem();
console.log({ freeMemory });

// File System Module
const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) console.log({ err });
  else console.log({ files });
});

// EventEmmiter Module
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
const Logger = require('./logger');
const logger = new Logger();

// register a Listener
logger.on('Logged Message', (arg) => {
  console.log('Listener call!!!', arg);
});

// raise an event
logger.log('Message...');

// HTTP Module
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/colors') {
    res.write(JSON.stringify(['red', 'white', 'green']));
    res.end();
  }
});

server.listen(3000);

console.log('Listening on port 3000!');
