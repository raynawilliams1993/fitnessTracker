  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// comparing this to seeds.js
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises : [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter a type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of exercise"
            },
            duration: {
                type: Number,
                required: "Please enter the duration of exercise"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});
const Workout =mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;