/*Create arrary of the solutions (cities) that will populate the game; 
      each city is a string*/
    
      /*VARIABLES*/
    /*====================================================================================================================*/
  var cityArr = ["ATHENS","BEIJING","BEIRUT","BERLIN","BOGOTA","GLASGOW","HAVANA","LISBON","LONDON","MADRID",
                    "MIAMI","MOSCOW","NAPLES","NASHVILLE","PARIS","REYKJAVIK","SOWETO", "TOKYO","VENICE",]; 

  //var beforeImg = randomCity.watercolor
  //var afterImg = randomCity.postcard    

    //gameStatus is the start/stop of game play
  //var gameStatus = false;


      /*SCORING*/
    /*=====================================================================================================================*/     
  var wins = 0;
  var losses = 0;
  var guessesRemaining = 10;

      /*GLOBALS*/
    /*=====================================================================================================================*/
    
    /*The computer selects a city at random, the user must guess one letter at a time*/
  var randomCity = "";
    
    console.log (cityArr); 
  
    //Dynamically fill an array with letters correctly or incorrectly guessed (checked against randomCity)
  var citySpell = [];
  var lettersCrct = [];
  var lettersInc = [];
  var letterPlayed = [];
  var slots = [];
      /*FUNCTIONS*/
    /*=====================================================================================================================*/
  function play() {
  
  randomCity = cityArr[Math.floor(Math.random() * cityArr.length)];
    //console.log(randomCity);  //this only prints to the console once remove the curly braces from function play and comment out ''.

  lettersCrct = randomCity.split("");
    console.log(randomCity);
  slots = lettersCrct.length;
      //console.log(slots);
  citySpell = [];
    document.getElementById("crct-spell").innerHTML = citySpell.join(" ");
    for (var i = 0; i < slots; i++) {
      citySpell.push("_");
    } 
      //console.log(citySpell);
      
  lettersInc = [];
    document.getElementById("inc-spell").innerHTML = lettersInc.join(" ");
    
  guessesRemaining = 10;
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    
  } //closes function play()

  function valid8Guess(letter)  {
      
    var letterFound = false;
      
    for (var i = 0; i < slots; i++) {
      if (randomCity[i] === letter) {
        letterFound = true;
      }
    }

    if (letterFound)  { 
      for (var c = 0; c < slots; c++) {
        if(randomCity[c] === letter)  {
          citySpell[c] = letter;
        }
      }
    }
    else  {
      lettersInc.push(letter);
      guessesRemaining--;
    }
  } //closes valid8Guess function

  function playedOut()  {
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    document.getElementById("crct-spell").innerHTML = citySpell.join(" ");
    document.getElementById("inc-spell").innerHTML = lettersInc.join(" ");

    if (lettersCrct.toString() === citySpell.toString())  {
      wins++;
       //add images and audio clips corresonding to solutions
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("city-solution").innerHTML = randomCity;

    play();

    }
    else if (guessesRemaining === 0)  {
      losses--;
        //add images and audio clips corresonding to solutions
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("city-solution").innerHTML = randomCity;
    
    play(); 

    }
  } //closes function playedOut

   /*GAME PLAY*/
  /*=====================================================================================================================*/

  play();

  document.onkeyup = function(event) {  
    letterPlayed = String.fromCharCode(event.which).toUpperCase();

    valid8Guess(letterPlayed);

    playedOut();
  };