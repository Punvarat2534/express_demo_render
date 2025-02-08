const pg = require('pg');

const config = {
  user: "sa",
  password: "1/sasql64",
  host: "k2mpg.ddns.net",
  port: 5432,
  database: "dbnap",
};

const client = new pg.Client(config);  
client.connect(); 

module.exports = client;
