const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://r:g@cluster0.ux5ulof.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
