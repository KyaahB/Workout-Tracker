const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('We visited the / route');
    res.send('Homepage!')
})

router.get('/world', (req, res) => {
    console.log('We visited the /world route');
    res.send('Hello!')
})

module.exports = router;