const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./Routes")
const db = require('./models');


const PORT = process.env.PORT || 3000;



const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {   
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
console.log ('app is running')
})


//    Add exercises to the most recent workout plan.
// app.post("/submit", ({body}, res) => {
//     db.Workout.create(body)
//     .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });
//    Add new exercises to a new workout plan.
// db.Workout.create({ name: "New Workout" })
//   .then(dbWorkout => {
//     console.log('new workout:', dbWorkout);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

//    View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//    View the total duration of each workout from the past seven workouts on the `stats` page.
