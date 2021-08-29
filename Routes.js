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

// create workout
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
 
// update
// router.put('/api/workouts/id', function (req, res) {
    
//     Workout.create({})
//     .then(dbWorkout => {
//         console.log(dbWorkout);

//         res.join(dbWorkout)
//     })
//     .catch(({ error}) => {
//         console.log(error);
//     });

// })

// update workouts so you can add a new exercise inside of the workout

router.put('/api/workouts/:id', (req, res) => {

    console.log(req.params.id);
    console.log(req.body)
    //Calls the update method 
    Workout.findOneAndUpdate(
        {
            // Gets a workout based on the id given
              _id: req.params.id
         },
        {
            // All the fields you can update and the data attached to the request body.
            $push: {
                exercises: req.body
            }
        }, 
        {
          new: true  
        }
      
    )
      .then((updatedWorkout) => {
          console.log(updatedWorkout)
        res.json(updatedWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });



  // route to get ALL workouts
  router.get("/api/workouts", (req, res) => {
    Workout.find({})
    //   .populate("")
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    //   .populate("")
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });




module.exports = router