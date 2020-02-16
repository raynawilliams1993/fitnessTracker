const router = require("express").Router()
const db = require("../models/workout")

// exercise:
router.use("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
// stats:
router.use("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
// index:
router.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
module.exports = router