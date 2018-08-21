    /*Create arrary of the solutions (cities) that will populate the game; 
      each city is a string*/
    
      /*VARIABLES*/
    /*====================================================================================================================*/
  var cityArr = ["ATHENS","BEIJING","BEIRUT","BERLIN","BOGOTA","GLASGOW","HAVANA","JOHANNESBURG","LISBON","LONDON","MADRID","MOSCOW","NAPLES","NASHVILLE","NEW YORK","PARIS","REYKJAVIK","RIO DE JANEIRO","SAN JUAN","TEL AVIV","TOKYO","VENICE"]; 

    //gameStatus is the start/stop of game play
  var gameStatus = false;

    /*The computer selects a city at random, the user must guess one letter at a time*/
  var randomCity = cityArr[Math.floor(Math.random() * cityArr.length)];
      console.log (randomCity)
      console.log (cityArr)
  //var beforeImg = randomCity.watercolor
  //var afterImg = randomCity.postcard
    
    /*all letters selected will be displayed as upper case value.toUpperCase();*/

  var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var guessText = document.getElementById("guess-text");
  var lettersCrct = document.getElementById("lettersCrct-text");
    
    /* Wins & Losses set to 0. Guesses Remaining set to 10*/    
  var wins = "Wins" + 0;
  var losses = "Losses" + 0;
  var guessesRemaining = "Guesses Remaining" + 10;

  //  var notAbc = alert("Please select a letter");
    
    //Dynamically fill an array with letters correctly guessed (checked against randomCity)
  var citySpell = [];

      /*Event Listeners*/
    /*=====================================================================================================================*/
    //renderRandomCity();
    //updateScore();
    
    document.addEventListener("keypress", function(event) {
      if (gameStatus) {
        checkGuess(event);
      }
      else {
        play();
    }
  });


      /*FUNCTIONS*/
    /*=====================================================================================================================*/
    document.onkeyup = function(event){
      guessText.textContent = event.key;
      console.log(guessText.textContent);
  };

    
    

 

/*To begin playing or reset the game*/
/*==========================================================================================================================*/
  function play() {
    //changes gameStatus to true(ready)
    gameStatus = true;
    console.log(gameStatus);
  }

  // Generate new randomCity, display it (as underscores) and its related images
  randomCity = cityArr[Math.floor(Math.random() * cityArr.length)];

  //Reset guessesRemaining
//guessesRemaining = "Guesses Remaining" + 10;

//citySpellArr = [];













