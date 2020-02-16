const router = require("express").Router()
const db = require("../models/workout")



router.get("/api/workout", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});



// // PUT /api/workouts
router.put("api/workout/:id", ({ params }, res) => {
    db.workout.update(
        {
            _id: mongojs.ObjectId(params.id)
        },
        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        });
    });

// // POST /api/workouts
router.post("/api/workouts", ({ body }, res) => {
    Transaction.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;
