const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/code_db';

mongoose.Promise = global.Promise;
mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true }
);
mongoose.connection
  .once('open', () => console.log(`Mongodb is running at ${MONGO_URL}`))
  .on('error', err => console.error(err));

module.exports = mongoose;
