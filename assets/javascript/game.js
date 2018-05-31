var gameOn = ['brasilia', 'carnival', 'soccer', 'portuguese', 'real', 'sao paulo', 'blumenau', 'caipirinha'];
      var guessWord = ""; 
      var lettersInword = []; 
      var correctGuess = []; 
      var wrongGuess = []; 
      var wins = 0;
      var loss = 0;
      var spaces = 0; 
      var guessesLeft = 12;
      

      //start the Game
      function pickWord() {
        guessesLeft =12;
        guessWord = gameOn[Math.floor(Math.random() * gameOn.length)];
        lettersInword = guessWord.split("");
        spaces = lettersInword.length;
        console.log(guessWord);
        wrongGuess = [];
        correctGuess = [];
      
        //spaces _
        for (var i = 0; i < spaces; i++) {
          correctGuess.push("_");
        }
        console.log(correctGuess);
        document.getElementById('remainingGuesses').innerHTML = ("Guesses Left: " + guessesLeft);
        document.getElementById('currentWord').innerHTML = ("Current Word: " + correctGuess);
        document.getElementById('UsersGuesses').innerHTML = ("Letters Guessed: " + wrongGuess);
      }
      
     //guesses
      function playerGuesses(letter) {
        var lettersInword = false;
        for (var i = 0; i < spaces; i++) {
          if (guessWord[i] === letter) {
            lettersInword = true;
          }
        }
        if (lettersInword) {
          for (var t = 0; t < spaces; t++) {
            if (guessWord[t] === letter) {
              correctGuess[t] = letter;
            }
      
          }
      
          
        } else {
          wrongGuess.push(letter);
          guessesLeft--;
        }
      }
      
  
      function calculate() {
        document.getElementById('remainingGuesses').innerHTML = ("Guesses Left: " + guessesLeft);
        document.getElementById('UsersGuesses').innerHTML = ("Letters Guessed: " + wrongGuess.join(" "));
        document.getElementById('currentWord').innerHTML = ("Current Word: " + correctGuess.join(" "));
        if (lettersInword.join("") === correctGuess.join("")) {
          wins++;
          document.getElementById('Wins').innerHTML = ("Wins: " + wins);
          alert('YOU ARE A TRUE BRAZILIAN!!!');
          pickWord();
        
        }
        
        else if (guessesLeft === 0) {
          loss++;
          document.getElementById('loss').innerHTML = ("Loses: " + loss);
          alert('OH NO, YOU NEED TO VISIT BRAZIL TO LEARN MORE!!! Please try again');
          pickWord();
        
        }
      }
      

      pickWord();
    
  
      document.onkeydown = function(event) {
        var chosenLetter = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(chosenLetter)
        playerGuesses(chosenLetter);
        calculate();
      };