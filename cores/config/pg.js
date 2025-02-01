require("dotenv").config()

module.exports = {
  development: {
    client: "pg",
    connection: {
      //connectionString: process.env.DATABASE_URL,
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
    },
  }
};

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