// First we need to import the HTTP module. This module contains all the logic for dealing with HTTP requests.
var http = require('http');

// We define the port we want to listen to. Logically this has to be the same port than we specified on ngrok.
const PORT=4390;

//https://4e6e6e73.ngrok.io/rps-rock

// We create a function which handles any requests and sends a simple response
function handleRequest(request, response){
  console.log(request.url);

  //Call methods
  switch(request.url)
  {
    case "/rps-rock":
      RPS_RockCall(response);
      break;
    case "/numguess":
      numGuess(response, request);
      break;
    case "/roll-d20":
      rolld20(response);
  }  
}

function RPS_RockCall(response)
{
  var min=1; 
  var max=4;  
  var message = "I choose Rock - Tie"
  var random =Math.floor(Math.random() * (+max - +min)) + +min; 
  if(random == 2)
  {
    message = "I choose Scissor - You Win"
  } 
  else if(random == 3) message = "I choose Paper - I win!!"
  response.end(message);
  
}

function numGuess(response, guess) {
  console.log(guess);
  response.end("30");
}

function rolld20(response) {
  var randNum = Math.floor(Math.random() * (20) + 1));
  
}

// We create the web server object calling the createServer function. Passing our request function onto createServer guarantees the function is called once for every HTTP request that's made against the server
var server = http.createServer(handleRequest);

// Finally we start the server
server.listen(PORT, function(){
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});