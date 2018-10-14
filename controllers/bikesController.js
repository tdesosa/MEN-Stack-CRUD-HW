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

// Edit Route & Page

router.get('/:id/edit', (req, res) => {

  Bikes.findById(req.params.id, (err, foundBike) => {
      res.render('edit.ejs', {
        bike: foundBike,
      });
  });
});

// Show Route & Page

router.get('/:id', (req, res) => {
  console.log(req.params);
  Bikes.findById(req.params.id, (err, foundBike) => {
    console.log(foundBike, 'foundBike')
      res.render('show.ejs', {
        bike: foundBike
      });
  });
});

router.put('/:id', (req, res) => {
  console.log(req.params.id, ' id in the put route');
  console.log(req.body, ' this should be our form data');

  Bikes.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
    res.redirect('/bikes')
  });
});


module.exports = router;