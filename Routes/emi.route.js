const express = require("express");
const app = express.Router();

app.post("/", (req, res) => {
  const { loan, rate, tenure } = req.body;
  r = rate / (12 * 100);
  P = loan;
  n = tenure;

  let EMI = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  let total = EMI * n;
  let intrest = total - loan;
  EMI = parseFloat(EMI).toFixed(2);
  total = parseFloat(total).toFixed(2);
  intrest = parseFloat(intrest).toFixed(2);
  console.log(EMI);
  res.status(200).send({ EMI, total, intrest });
});
module.exports = app;
