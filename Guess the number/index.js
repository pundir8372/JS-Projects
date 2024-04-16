let randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector("#submit");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const between = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".result-Parahs");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
  })
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  }
  else if (guess < 1) {
    alert("please enter a valid number greater than or equal to 1");
  }
  else if (guess > 100) {
    alert("please enter a valid number less than 100")
  }
  else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`Game Over.Random number was ${randomNumber}`);
      endGame();
    }
    else {
      displayGuess(guess);
      checkGuess(guess);
    }

  }

}
function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage("You guessed the right number");
    endGame();
  }
  else if (guess <= randomNumber) {
    displayMessage("You guessed Too Low number");
  }
  else if (guess >= randomNumber) {
    displayMessage("You guessed Too High number");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML = `${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message) {
  between.innerHTML = `<h3>${message}</h3>`;
  between.style.color = "black";
}

function newGame() {
  const newGameButton=document.querySelector("#new-Game");
  newGameButton.addEventListener("click",()=>{
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=0;
    guessSlot.innerHTML="";
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame=true;
  })

}

function endGame() {
  userInput.value="";
  userInput.setAttribute("disabled","");
  p.classList.add("#submit");
  p.innerHTML=`<h2 id="new-Game">Start a new game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}


