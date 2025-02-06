const knex = require("knex")({ client: 'pg' });
const knexFile = require("../config/db");
const environment = process.env.NODE_ENV || "development";
module.exports = knex(knexFile[environment]);

