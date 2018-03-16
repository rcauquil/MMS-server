import express from 'express';
import bodyParser from 'body-parser';
import routes from '../server/routes';
import ioP from 'socket.io';

/**
 * Vars
 */
const app = express();

let server = null;
server = require('http').createServer(app);

// Socket.io server
const io = ioP(server);

/**
 * Parse incoming request bodies in bodyParser middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * CORS
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, authorization, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Mount all routes on /api path
 */
app.use('/api', routes);

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  console.log("[DEBUG] Error", err);
  res.status(err.statusCode || 500).json(err);
});

/**
 * Export
 */
export {
  app,
  server,
  io
};
