/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const connection = require("../../config/mysql");

module.exports = {
  register: (data) =>
    new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO user SET firstName = ?, lastName = ?, email = ?, noTelp =?, password =? ",
        [data.firstName, data.lastName, data.email, data.noTelp, data.password],
        (error, result) => {
          if (!error) {
            const newResult = {
              id: result.insertId,
              ...data,
            };
            resolve(newResult);
          } else {
            reject(new Error(error.sqlMessage));
          }
        }
      );
    }),

  getUserByEmail: (email) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM user WHERE email = ?",
        email,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error.sqlMessage));
          }
        }
      );
    }),
};
