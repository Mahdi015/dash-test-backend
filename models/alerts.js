const mongoose = require("mongoose");

const Alerts = mongoose.Schema(
  {
    alertsData: [{ date: String, alertN: Number }],
    alertsCount: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("alert", Alerts);
