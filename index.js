import { app, server, io } from './config/express';

/**
 * Socket.io
 * Verify incomming socket connection by its jwt token
 * If correct extracts the user's projects and add him to the correct rooms
 */
io.on('connection', (socket) => {
  socket.emit('ready');
});

/**
 * Runs the server
 */
server.listen(3000, () => {
  console.log('API Server started and listening on port 3000');
});
