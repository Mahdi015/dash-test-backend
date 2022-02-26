const Alert = require("../models/alerts");

exports.createAlert = async (req, res) => {
  console.log(req.body);
  const alert = await new Alert(req.body).save();
  res.json(alert);
  console.log(alert);
};
exports.getAlertsData = async (req, res) => {
  const getAlerts = await Alert.findOne().exec();
  res.json(getAlerts);
  console.log(getAlerts);
};
exports.pushAlert = async (req, res) => {
  const alert = await Alert.findOne().exec();
  let updatedAlertCount = alert.alertsCount + 1;
  console.log(updatedAlertCount.toString());

  let existing = alert.alertsData.find((ele) => ele.date === req.body.datenow);
  if (existing) {
    const updatee = await Alert.findByIdAndUpdate(
      "6217e70b57317f625b21b109",
      { alertsCount: updatedAlertCount },
      { new: true }
    ).exec();
    const alertUpdate = await Alert.updateOne(
      { alertsData: { $elemMatch: existing } },
      {
        $set: { "alertsData.$.alertN": updatedAlertCount },
      },
      { new: true }
    ).exec();
    res.json({ alertUpdate, updatee });
    console.log("alertUpdate");
  } else {
    const pushalert = await Alert.findByIdAndUpdate(
      "6217e70b57317f625b21b109",
      {
        $push: {
          alertsData: { date: req.body.datenow, alertN: updatedAlertCount },
        },
        alertsCount: updatedAlertCount,
      },
      { new: true }
    ).exec();
    res.json(pushalert);
    console.log("pushalert");
  }
};
