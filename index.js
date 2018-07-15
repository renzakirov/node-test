const app = require('./app');
const database = require('./database');
const config = require('./config');

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}!`);
});
/*
database().then((info) => {
  console.log(`Connected to ${info.host} ${info.port} ${info.name}`);
  
  app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`);
  });

}).catch(() => {
  console.log('Unable connect to DB');
  process.exit(1);
});
*/