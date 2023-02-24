const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shop',
  password: 'postgrespassword',
  port: 5432,
})

module.exports = {
  pool: pool
}