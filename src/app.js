const express = require('express');
const logger = require('morgan');
const cors = require('cors');

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

app.listen(3030, () => {
  console.log('Server is running at port 3030');
});
