const express = require("express");
const app = express();
// allows us to use .env
require("dotenv").config();

app.get("/", (req, res) => {
    // sends to display on browser
  res.send("hello from node");
});

const port = process.env.PORT || 8000;

// run it
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
