const router = require('express').Router()
const path = require('path')

const Workout = require('./models/Workout.js')

// HTML routes

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, './public/exercise.html'))
})

router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, './public/stats.html'))
})


// API routes

router.post('/api/workouts', function (req, res) {

    Workout.create({})
        .then(dbWorkout => {
            console.log(dbWorkout);

            res.json(dbWorkout)
        })
        .catch(({ message }) => {
            console.log(message);
        });

})

router.put('api/workouts', function (req, res) {
    Workout.save({})
    .then(dbworkout => {
        console.log
    })

})



module.exports = router