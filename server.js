const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./Routes")

const PORT = process.env.PORT || 3000;

// const User = require("./seed.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {   useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true
});

app.listen(PORT, () => {
console.log ('app is running')
})



//    Add exercises to the most recent workout plan.

//    Add new exercises to a new workout plan.

//    View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//    View the total duration of each workout from the past seven workouts on the `stats` page.