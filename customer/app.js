const express = require('express');
const routes = require('./routes');
const app = express();

// Use routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(3000, function() {
    console.log("Server is listening at port 3000");
});
