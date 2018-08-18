    /*Create arrary of the solutions (cities) that will populate the game; 
      each city is a string*/

  var randomCityArr = ["PARIS","SAO PAOLO","HAVANA","MOSCOW","NEW YORK","BEIRUT","LONDON","FLORENCE","LAGOS","REYKJAVIK"]; 
      /*console.log (randomCityArr); so far, so good*/ 
    
    /*The computer selects a word at random, the user must guess*/
  var randomCity = randomCityArr[Math.floor(Math.random() * randomCityArr.length)];
      
   
    /*Display on page "Press any key to begin!"
      #box-left empty, #box-right holds score, letters guessed and guesses left*/
    function begin() {
      var u = u.value.toUpperCase();
    }

    /* Wins & Losses set to 0. Guesses Remaining set to 10*/    
  var c 
  var x
  var wins = 0;
  var guessesRemaining = 10;
  var u /*used for function toUpperCase
    
    /*lettersIncArray empty at "function begin", will populate with letters incorrectly guessed. lettersCrctArray will be filled with 
    underscores, same number as in solution for randomly chosen word.*/
  var lettersIncArray = [];
  var lettersCrctArray = [];

    function play() {
      
      for (var i = 0; i < randomCity.length; i++)
      {
      lettersCrctArray[i] = "_";
      } /*closes for*/

      /*joins them in a string*/
      c = lettersCrctArray.join(" ");
      document.getElementById("answer").innerHTML = c;
    } /*closes function begin*/

    function Letter() {

      var letter = documentgetElementById("letter").value;

        /*only letters can be guessed*/
      if (letter.length > 0) {
        
        for (var i = 0; i < randomCity.length; i++)

            /*if user typed letter contained in randomCity, it will be assigned to a letter*/
          if (randomCity[i] === letter) {

            lettersCrctArray[i] = letter;
          }   

          
      }
      count++;
      document.getElementById("counter"),innerHTML = "Gueses remaining: " - count;
      document.getElementById("answer").innerHTML = lettersCrctArray.join(" ");
    }






  





    /*First key pressed initializes random math. Display number of empty spaces equal 
      to the number of letters in the word to be guessed.*/















