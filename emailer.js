#!/usr/bin/env node

/**
 * Module dependencies.
 */
require('dotenv').config()
const debug = require("debug");
debug.enable(process.env.DEBUG)
const http = require("http");
const app = require("./app");
const CONSTANTS = require("./constants");
const serverLog = debug('emailer.js')
const chalk = require('chalk');
const Err = chalk.bold.red;
const warning = chalk.keyword('orange');


/** 
  const miles = 18;
  const calculateFeet = miles => miles * 5280;
  console.log(chalk`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
  `);
*/

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(CONSTANTS.PORT);
app.set("port", port);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      serverLog(Err(`${bind} requires elevated privileges`));
      process.exit(1);
      break;
    case "EADDRINUSE":
      serverLog(Err(`${bind} is already in use`));
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  serverLog(chalk.magenta("---------------------------------------"))
  serverLog(chalk.green.bold(`Listening on ${bind}`));
}
