const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    type: String,
});

const Bikes = mongoose.model('bikes', bikeSchema);
module.exports = Bikes;