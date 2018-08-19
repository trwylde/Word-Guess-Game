    /*Create arrary of the solutions (cities) that will populate the game; 
      each city is a string*/

    /*VARIABLES*/
    /*====================================================================================================================*/
  var randomCityArr = ["ATHENS","BEIJING","BEIRUT","BERLIN","BOGOTA","GLASGOW","HAVANA","JOHANNESBURG","LISBON","LONDON","MADRID","MOSCOW","NAPLES","NASHVILLE","NEW YORK","PARIS","REYKJAVIK","RIO DE JANEIRO","SAN JUAN","TEL AVIV","TOKYO","VENICE"]; 
    
    
    /*The computer selects a city at random, the user must guess one letter at a time*/
  var randomCity = randomCityArr[Math.floor(Math.random() * randomCityArr.length)];
      console.log (randomCity)
      console.log (randomCityArr)

    /*all letters selected will be displayed as upper case value.toUpperCase();*/
    /* Wins & Losses set to 0. Guesses Remaining set to 10*/    
  
  var playerGuess = document.getElementById("player-guess").innerHTML;
  var wins = 0;
  var losses = 0;
  var guessesRemaining = 10;

    
    /*lettersIncArray empty at "function begin", will populate with letters incorrectly guessed. lettersCrctArray will be filled with 
    underscores, same number as in solution for randomly chosen word.*/
  var lettersIncArray = [];
  var lettersCrctArray = [];

    /*FUNCTIONS*/
    /*=====================================================================================================================*/

    document.onkeyup = function(event) {
      playerGuess.textContent = event.key;
    };






    /*GAME PLAY*/


  
  
  function play() {
      
    for (var i = 0; i < randomCity.length; i++) {
      lettersCrctArray[i] = "_";
    /*if playerGuess is correct*/
      if (playerGuess = lettersCrctArray) {
        console.log("right")
     }
      else {
        console.log("wrong")
      }
    
    } /*closes for*/

    /*joins them in a string*/
    /*playerGuess = lettersCrctArray.join(" ");*/
    /*document.getElementById("lettersCrct").innerHTML = playerGuess;*/
 } /*closes function play*/















