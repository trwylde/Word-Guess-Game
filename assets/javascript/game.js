    /*Create arrary of the solutions (cities) that will populate the game; 
      each city is a string*/
//document.getElementById("Hi").innerHTML = "Don't you wish you were here?!"; just a test... IT WORKS!!
    /*VARIABLES*/
    /*====================================================================================================================*/
  var randomCityArr = ["ATHENS","BEIJING","BEIRUT","BERLIN","BOGOTA","GLASGOW","HAVANA","JOHANNESBURG","LISBON","LONDON","MADRID","MOSCOW","NAPLES","NASHVILLE","NEW YORK","PARIS","REYKJAVIK","RIO DE JANEIRO","SAN JUAN","TEL AVIV","TOKYO","VENICE"]; 
    
    
    /*The computer selects a city at random, the user must guess one letter at a time*/
  var randomCity = randomCityArr[Math.floor(Math.random() * randomCityArr.length)];
      console.log (randomCity)
      console.log (randomCityArr)

    /*all letters selected will be displayed as upper case value.toUpperCase();*/
    /* Wins & Losses set to 0. Guesses Remaining set to 10*/    
  
  var userText = document.getElementById("player-guess");
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
      userText.textContent = event.key;
    };






    /*GAME PLAY*/


  
  















