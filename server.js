require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.MONGO_URL;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection is successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(`Server is not running. Error message: ${error.message}`);
    process.exit(1);
  });
