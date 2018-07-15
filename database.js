const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
  return new Promise( (resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);

    mongoose.connection
      .on('error', error => {
        console.log('DB ERROR = ', error);
        reject(error);
      })
      .on('close', () => console.log('DB closed'))
      .on('open', () => resolve(mongoose.connection[0]));

    mongoose.connect(config.DB, { useNewUrlParser: true });
  });
}