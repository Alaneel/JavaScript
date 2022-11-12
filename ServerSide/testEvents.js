// testEvents.js
const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler for hello event
const myHelloEventHandler = () => console.log('someone says hello to me...');

// Attach an event handler to an event
eventEmitter.on('hello', myHelloEventHandler);

// Fire the 'hello' event
eventEmitter.emit('hello');
// someone says hello to me...