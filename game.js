let secretNumber;
let attempts = 0;

const userGuessInput = document.getElementById('userGuess');
const feedbackParagraph = document.getElementById('feedback');
const playAgainButton = document.getElementById('playAgainBtn');
const submitButton = document.querySelector('button[onclick="checkGuess()"]');

function startGame(){
    secretNumber= Math.floor(Math.random()*20)+1;
    attempts=0;

    feedbackParagraph.textContent='';
    feedbackParagraph.className='';
    userGuessInput.value ='';

    userGuessInput.disabled = false;
    submitButton.disabled = '';

    playAgainButton.style.display = 'none';

    console.log("New game started!Secret number is:"+secretNumber);
}

function checkGuess(){
    const userGuess= parseInt(userGuessInput.value);

    if(userGuess<1 || userGuess>20){
        feedbackParagraph.textContent='please enter a valid input between 1 to 20';
        feedbackParagraph.className= 'feedback-high';
        return;
    }

    attempts++;

    if (userGuess === secretNumber){
        feedbackParagraph.textContent='Correct! You Guessed it.👍🏻';
        feedbackParagraph.className= 'feedback-correct';
        userGuessInput.disabled= true;
        playAgainButton.style.display='block';
    }
    else if(userGuess<secretNumber){
        feedbackParagraph.textContent='Too Low! Try Again.👇🏻';
        feedbackParagraph.className-'feedback-low';
    }
    else{
        feedbackParagraph.textContent='Too High! Try Again.👆🏻';
        feedbackParagraph.className='feedback-high';
    }

    userGuessInput.value='';
}

function resetGame(){
    startGame();
}
window.onload= startGame;


userGuessInput.addEventListener("keypress", function(event){
    if(event.key === 'enter'){
        event.preventDefault();
        checkGuess();
    }
})