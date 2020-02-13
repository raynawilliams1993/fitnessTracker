
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    distance: {
        type: Number,
        trim: true,
        required: false,
        validate: [(distance) => distance > 0, "Must be greater than zero."]
    },
    duration: {
        type: Number,
        trim: true,
        required: true,
        validate: [(duration) => duration > 0, "Must be greater than zero."]
    }, 
    weight: {
        type: Number,
        trim: true,
        required: false,
        validate: [(weight) => weight > 0, "Must be greater than zero."]
    },
    sets: {
        type: Number,
        trim: true,
        required: false,
        validate: [(sets) => sets > 0, "Must be greater than zero."]
    },
    reps: {
        type: Number,
        trim: true,
        required: false,
        validate: [(reps) => reps > 0, "Must be greater than zero."]
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout