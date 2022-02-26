const express = require("express");
const router = express.Router();

// Controller

const {
  createAlert,
  getAlertsData,
  pushAlert,
} = require("../controllers/alert");

//routes
router.post("/alerts/createalert", createAlert);
router.get("/alerts/getAlerts", getAlertsData);
router.post("/alerts/pushAlert", pushAlert);

//exports
module.exports = router;
