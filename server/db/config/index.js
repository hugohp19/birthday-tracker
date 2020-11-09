const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

try{ 
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB connection established!');
  });
}catch{
    console.log('error')
  }
