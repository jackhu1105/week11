const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const {
  MONGO_HOST = 'mongo',
  MONGO_PORT = 27017,
  MONGO_DB = 'signupdb',
  MONGO_USER,
  MONGO_PASS
} = process.env;

let uri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const connect = async () => {
  await mongoose.connect(uri);
};

module.exports = { connect };
