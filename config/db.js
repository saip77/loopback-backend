const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres', // Correct username
  host: 'localhost', // Correct host (usually 'localhost' or '127.0.0.1')
  database: 'loopback_db', // Correct database name
  password: 'password', // Correct password
  port: 5432, // Default PostgreSQL port
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to PostgreSQL', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});
module.exports = pool;