// First we need to import the HTTP module. This module contains all the logic for dealing with HTTP requests.
var http = require('http');

// We define the port we want to listen to. Logically this has to be the same port than we specified on ngrok.
const PORT=4390;

//https://69eb0b3b.ngrok.io/command

// We create a function which handles any requests and sends a simple response
function handleRequest(request, response){
  //Call methods
  console.log(request);
  switch(request.url)
  {
    case "/rps-rock":
      RPS_RockCall(response);
      break;
    case "/rps-paper":
      RPS_PaperCall(response);
      break;
    case "/rps-scissor":
      RPS_ScissorCall(response);
      break;
    case "/rps-lizard":
      RPS_LizardCall(response);
      break;
    case "/rps-spock":
      RPS_SpockCall(response);
      break;
    case "/help":
      help(response);
      break;
  }  
}

//Rock 
function RandomValueGenerator(min, max){
   return Math.floor(Math.random() * (+max - +min)) + +min; 
}
function RPS_RockCall(response)
{
  var random = RandomValueGenerator(1,6);
  var message = "Bot chose Rock - Tie!";
  if(random == 2) message = "Bot chose Scissor - You Win!";
  else if(random == 3) message = "Bot chose Paper - You Lose!";
  else if(random == 4) message = "Bot chose Lizard - You Win!";
  else if(random == 5) message = "Bot chose Spock - You Lose!";
  response.end(message);
}

function RPS_PaperCall(response)
{
  var random = RandomValueGenerator(1,6);
  var message = "Bot chose Paper - Tie!"
  if(random == 2) message = "Bot chose Rock - You Win!"
  else if(random == 3) message = "Bot chose Scissor - You Lose!"
  else if(random == 4) message = "Bot chose Lizard - You Lose!";
  else if(random == 5) message = "Bot chose Spock - You Win!";
  response.end(message);
}

function RPS_ScissorCall(response)
{
  var random = RandomValueGenerator(1,6);
  var message = "Bot chose Scissor - Tie!"
  if(random == 2) message = "Bot chose Paper - You Win!"
  else if(random == 3) message = "Bot chose Rock - You Lose!"
  else if(random == 4) message = "Bot chose Lizard - You Win!";
  else if(random == 5) message = "Bot chose Spock - You Lose!";
  response.end(message);
}

function RPS_LizardCall(response)
{
  var random = RandomValueGenerator(1,6);
  var message = "Bot chose Lizard - Tie!"
  if(random == 2) message = "Bot chose Paper - You Win!"
  else if(random == 3) message = "Bot chose Rock - You Lose!"
  else if(random == 4) message = "Bot chose Scissors - You Lose!";
  else if(random == 5) message = "Bot chose Spock - You Win!";
  response.end(message);
}

function RPS_SpockCall(response)
{
  var random = RandomValueGenerator(1,6);
  var message = "Bot chose Spock - Tie!"
  if(random == 2) message = "Bot chose Paper - You Lose!"
  else if(random == 3) message = "Bot chose Rock - You Win!"
  else if(random == 4) message = "Bot chose Lizard - You Lose!";
  else if(random == 5) message = "Bot chose Scissors - You Win!";
  response.end(message);
}

//Help Command

function help(response)
{
  var message = "Welcome to Ulti-lity Bot!\n" + 
                "We have a variety of awesome utilities for everyone!\n" +
                "For Rock Paper Scissor Lizard Spock: /rps-{Play}" +
                "For a con flip: /coinflip\n" +
                "For a dice roll: /roll-{dice value}\n";
}

// We create the web server object calling the createServer function. Passing our request function onto createServer guarantees the function is called once for every HTTP request that's made against the server
var server = http.createServer(handleRequest);

// Finally we start the server
server.listen(PORT, function(){
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});