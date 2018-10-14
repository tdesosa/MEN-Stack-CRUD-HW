const express = require ('express');
const app = express();
const port = 3000;

// Connect Express to Mongo
require('./db/db')

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Setup Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Require The Controller
const bikesController = require('./controllers/bikesController')

// Set Up Routes In SoccerTems Controller
app.use('/bikes', bikesController);

// Set Up a Landing Page
app.get('/', (req, res) => {
    res.render('landing.ejs');
});

// Server Is Listening
app.listen(port, () => {
    console.log(`Port: ${port} up and running`);
});

module.exports = app;