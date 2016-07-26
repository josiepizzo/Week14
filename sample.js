//ALL THE CODE YOU NEED TO START A WEB SERVER
var express = require('express');
var app = express();
app.listen(3000);

//DEFINE ONE ROUTE - TAKE IN 3 PARAMETERS. - AN OPERATION AND TWO NUMBERS.
//THE SINGLE ROUTE SHOULD BE ABLE TO HANDLE THESE REQUEST:

//ie http://localhost:3000/add/10/5
//ie http://localhost:3000/subtract/10/1
//ie http://localhost:3000/divide/10/5
//ie http://localhost:3000/multiply/10/5

//the response should be the result of the math operation
app.get('/add/10/5', function(req, res){
  res.send();
})