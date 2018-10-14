const express = require ('express');
const app = express();
const port = 3000;


// Server Is Listening
app.listen(port, () => {
    console.log(`Port: ${port} up and running`);
});

module.exports = app;