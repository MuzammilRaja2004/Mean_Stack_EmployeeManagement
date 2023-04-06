const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Crud';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the MongoDB server');
    // mongoose.connection.close();
  })
  .catch(err => {
    console.log('Unable to connect to the MongoDB server:', err);
  });


module.exports = mongoose
