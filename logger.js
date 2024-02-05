const EventEmitter = require('events');
// const emitter = new EventEmitter();

const url = 'http//mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // sent an HTTP request
    console.log(message);

    // raise and event
    this.emit('Logged Message', { id: 1, url });
  }
}

module.exports = Logger;
