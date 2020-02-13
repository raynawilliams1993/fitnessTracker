const router = require("express").Router()
const db = require("../models")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.render(data)
    })
    .catch(err => {
        res.json(err)
    })
})

// // PUT /api/workouts
router.put("api/workouts/:id", ({body}, res) => {

    //findByIdandUpdate

    console.log(body)
    db.Workout(body)
    .then(data => {
        console.log(data)
        res.status(200).end()
    })
    .catch(err => {
        res.json(err)
    })
})

// // POST /api/workouts
router.post("api/workouts", ({body}, res) => {
    console.log(body)
    db.Workout.create(body)
    .then(data => {
        console.log(data)
        res.status(200).end()
    })
    .catch(err => {
        res.json(err)
    })
})

// GET /api/workouts/range

module.exports = router