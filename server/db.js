const Pool = require("pg").Pool;

const pool = new Pool({
  user: 'FayeCarter',
  password: null,
  host: 'localhost',
  port: 5432,
  database: 'auth_database',
});

module.exports = pool;