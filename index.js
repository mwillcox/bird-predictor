// set up ========================
var express = require('express');
var app = express();                               

  // Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
  console.log("App now running on port", port);
});   

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}