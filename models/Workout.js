const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {

            type: String,
            type: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const ExerciseModel = mongoose.model("workout", ExerciseSchema);

module.exports = ExerciseModel;
