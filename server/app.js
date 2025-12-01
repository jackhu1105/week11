const express = require('express');
const morgan = require('morgan');
const { connect } = require('./db');
const signupRoutes = require('./routes/signup');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/signup', signupRoutes);

connect().then(() => {
  app.listen(3000);
});
