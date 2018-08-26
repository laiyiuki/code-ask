const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const socketIO = require('socket.io');

require('./mongoose');
const api = require('./api');

const app = express();

app
  .use(logger('dev'))
  .use(cors())
  .use(express.json())
  .use(
    express.urlencoded({
      extended: false,
    })
  )
  .use('/api', api);

const server = app.listen(3030, () => {
  console.log('Server is running at port 3030');
});

const io = socketIO(server);

io.on('connection', client => {
  console.log('client connected');
  io.sockets.emit('Hello', { msg: 'Hello' });
});
