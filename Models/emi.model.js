const mongoose = require("mongoose");
const emiSchema = mongoose.Schema({
  loan: Number,
  rate: Number,
  tenure: Number,
});
const emiModel = mongoose.Model("emiData", emiSchema);
module.exports = emiModel;
