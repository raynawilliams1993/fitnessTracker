const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "";
const collections = [""];

const db = mongoose(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(index.html);
});




// LISTEN ON PORT 3000:
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  