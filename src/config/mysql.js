const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  timezone: "utc",
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  /* eslint-disable no-console */
  console.log("You're now connected to mysql ...");
});
module.exports = connection;
