const express = require("express");

const Router = express.Router();

const bookingController = require("./bookingController");

Router.post("/", bookingController.createBooking);
// Router.get("/seatbooking", bookingController.getSeatBooking);
// Router.get("/:id", bookingController.getBookingByIdBooking);
Router.patch("/:id", bookingController.updateStatusBooking);
// Router.get("/:id", bookingController.getDashboardBooking);
// Router.delete("/:id", bookingController.deleteBooking);

// Router.get("/hello", movieController.getHello);
// Router.get("/hello", (request, response) => {
//   response.status(200);
//   response.send("Hello World");
// });

module.exports = Router;
