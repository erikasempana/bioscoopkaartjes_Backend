const { request } = require("express");
const { response } = require("../helpers/wrapper");
const helperWrapper = require("../helpers/wrapper");
const jwt = require("jsonwebtoken");
const { login } = require("../modules/auth/authController");

module.exports = {
  authentication: (request, response, next) => {
    // const token = request.header("x-access-token");
    const token = request.headers.authorization;

    if (!token) {
      return helperWrapper.response(response, 403, "Please login first", null);
    }
    // token = token.split(" ")[1];
    jwt.verify(token, "RAHASIA", (error, payload) => {
      if (error) {
        return helperWrapper.response(response, 403, error, null);
      }
      const { id, email } = payload;
      request.userInfo = { id, email };

      //untuk menyimpan token login
      // request.decodeToken = result;
      next();
    });
  },
  isAdmin: (request, response, next) => {
    console.log(request.decodeToken);
  },
  //Tambahkan proses untuk mengecek role apakah user yang masuk admin atau bukan
};