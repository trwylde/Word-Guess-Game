    /*Create arrary of the solutions (cities) that will populate the game; 
      each city is a string*/
//document.getElementById("Hi").innerHTML = "Don't you wish you were here?!"; just a test... IT WORKS!!
    /*VARIABLES*/
    /*====================================================================================================================*/
  var cityArr = ["ATHENS","BEIJING","BEIRUT","BERLIN","BOGOTA","GLASGOW","HAVANA","JOHANNESBURG","LISBON","LONDON","MADRID","MOSCOW","NAPLES","NASHVILLE","NEW YORK","PARIS","REYKJAVIK","RIO DE JANEIRO","SAN JUAN","TEL AVIV","TOKYO","VENICE"]; 
    
    //to control game start/stop
var gameStatus = false;   
    
    /*The computer selects a city at random, the user must guess one letter at a time*/
  var randomCity = cityArr[Math.floor(Math.random() * cityArr.length)];
      console.log (randomCity)
      console.log (cityArr)

    /*all letters selected will be displayed as upper case value.toUpperCase();*/
    /* Wins & Losses set to 0. Guesses Remaining set to 10*/    
  
  var userText = document.getElementById("letters-crct");
  var wins = 0;
  var losses = 0;
  var guessesRemaining = 10;

   
    /*lettersIncArray empty at "function begin", will populate with letters incorrectly guessed. lettersCrctArray will be filled with 
    underscores, same number as in solution for randomly chosen word.*/
  var lettersIncArray = [];
  var lettersCrctArray = [];

    /*FUNCTIONS*/
    /*=====================================================================================================================*/



    //var lettersArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


    function play() {
      
      for (var i = 0; i < randomCity.length; i++)
      {
      lettersCrctArray[i] = "_";
      } /*closes for*/

      /*joins them in a string*/
      playerGuess = lettersCrctArray.join(" ");
      document.getElementById("letters-crct").innerHTML = letters;
    } /*closes function begin*/

//    function Letter() {

//      var letter = documentgetElementById("letter").value;
//    }

           

          
      




    /*GAME PLAY*/


  
  















