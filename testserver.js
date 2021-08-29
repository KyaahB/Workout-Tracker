const express = require('express');

const app = express();

const routes = require('./testroutes.js');


app.use(routes)




app.listen(3001, () => {
    console.log("Server is running!")
})
