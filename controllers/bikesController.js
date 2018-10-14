const express = require('express');
const router  = express.Router();

// Require the models that our controller needs
const Bikes = require('../models/bikes');

// Index Route

router.get('/', (req, res) => {
    Bikes.find({}, (err, allBikes) => {
      if(err){
        console.log(err);
      } else {
        console.log(allBikes)
        res.render('index.ejs', {bikes: Bikes});
        }
    });
});

// New Route

module.exports = router;