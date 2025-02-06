require("dotenv").config()
const knex = require("knex");

module.exports = {
  client: "pg",
  development: {
    client: "pg",
    connection: {
        host: "k2mpg.ddns.net",
        user: "sa",
        password: "1/sasql64",
        database: "dbnap",
    },
  }
};


/*module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URI,
    migrations: {
      directory: "./db/migrations",
    }
  }
};*/

/*const dbs = knex({
  client: 'pg',
  connection: {
    host: "k2mpg.ddns.net",
    port: "5432",
    user: "sa",
    database:"dbnap",
    password:"1/sasql64",
  },
});*/

/*const pg = require('knex')({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    //ssl: config['DB_SSL'] ? { rejectUnauthorized: false } : false,
  },
});*/