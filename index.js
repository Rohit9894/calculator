const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const userRoute = require("./Routes/user.route");
const emiRoute = require("./Routes/emi.route");
const app = express();
// Hello
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("Hello React js");
});
app.use("/auth", userRoute);
app.use(express.json());
app.use("/calculate", emiRoute);

app.listen(3001, async () => {
  try {
    await connect();
    console.log(`http://localhost:3001`);
  } catch (e) {
    console.log(e.message);
  }
});
