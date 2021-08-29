const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const WorkoutModel = mongoose.model("workout", WorkoutSchema);

module.exports = WorkoutModel;
