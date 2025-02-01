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
