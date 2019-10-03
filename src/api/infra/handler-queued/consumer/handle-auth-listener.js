/* eslint no-console: "off" */
const EventEmitter = require("events");

class AuthSuccessEmitter extends EventEmitter {}

module.exports = AuthSuccessEmitter;
