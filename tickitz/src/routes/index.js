const express = require("express");

const Router = express.Router();

const movieRoutes = require("../modules/movie/movieRoutes");
// const scheduleRoutes = require("../modules/schedule/schedulesRoutes")
const scheduleRoutes = require("../modules/schedule/scheduleRoutes");
const bookingRoutes = require("../modules/Booking/bookingRoutes");

Router.use("/movie", movieRoutes);
// Router.use("/schedule", scheduleRoutes)
Router.use("/schedule", scheduleRoutes);
Router.use("/booking", bookingRoutes);

// Router.get("/hello", (request, response) => {
//   response.status(200);
//   response.send("Hello World");
// });

module.exports = Router;
