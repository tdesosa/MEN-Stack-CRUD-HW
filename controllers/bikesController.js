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
        res.render('index.ejs', {bikes: allBikes});
        }
    });
});

// New Page

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// Create Route

router.post('/', (req, res) => {
  Bikes.create(req.body, (err, createdBike) => {
    if(err){
      console.log(err)
    } else {
      console.log(createdBike);
      res.redirect('/bikes')
    }
  })
});


module.exports = router;