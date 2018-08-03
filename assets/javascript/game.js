
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  var wins = 0;
  var losses = 0;
  var attempt = 0;


  document.onkeyup = function(event) {


    var userGuess = event.key;

    var computerGuess = abc[Math.floor(Math.random() * abc.length)];

      if ((userGuess === computerGuess )) {
        wins++;
        attempt = 0;
      } 
      else  {
        attempt++}
    

      var html =
        "<h2>You chose: " + userGuess + "</h2>" +
        "<h2>The computer chose: " + computerGuess + "</h2>" +
        "<h3>wins: " + wins + "</h3>" +
        "<h3>losses: " + losses + "</h3>" +
        "<h3>Attempt: " + attempt + "/10 </h3>";

     
      document.querySelector("#game").innerHTML = html;
      if (attempt == 10) {
        alert("Game over, Try again!");
        losses++;
        attempt = 0;
      }
    };
