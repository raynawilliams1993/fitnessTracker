const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "";
const collections = [""];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(index.html);
});

//GET WORKOUTS ROUTE:



//POST WORKOUT ROUTE:


//GET ONE WORKOUT ROUTE:


//UPDATE WORKOUT ROUTE:



//DELETE WORKOUT ROUTE:



//GET STATS PAGE??****ASK ABOUT THIS***


// LISTEN ON PORT 3000:
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  