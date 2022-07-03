let number = Math.floor(Math.random() * 10 + 1);
const guessInput = document.getElementById('guess-input');
const guessValue = document.getElementById('guess-value');
const msg = document.querySelector(".message");
const form = document.querySelector('form')

let totalChances = 2;

//Creating element
const playAgainBtn = document.createElement('input');
playAgainBtn.id = 'play-again'
playAgainBtn.value = 'PLAY AGAIN'
playAgainBtn.type = 'reset'

//event loaders
function eventLoader() {
    form.addEventListener('submit', winningCheck)
    form.addEventListener('reset', reseting)

}

eventLoader();

//subtracting the total chances as guess is wrong
function chanceCounting() {
    totalChances = totalChances - 1
}



//checking the guess numbers
function winningCheck(e) {

    if (number === Number(guessInput.value)) {
        msg.innerHTML = `${guessInput.value} is correct guess`
        guessInput.style.border = '1px solid green'
        msg.style.color = 'green';
        guessValue.remove();
        form.appendChild(playAgainBtn);
        guessInput.disabled = false;

    }
    else if (totalChances >= 1) {
        msg.innerHTML = `
            ${guessInput.value} is not Correct. You have ${totalChances} guesses left`
        msg.style.color = 'red'
        guessInput.disabled = false;
    }
    else {
        msg.innerHTML = `Sorry game over, the actual answer is ${number}`
        guessInput.style.border = '1px solid red'

        //removing the submit btn
        guessValue.remove();

        //adding the reset btn
        form.appendChild(playAgainBtn)

        guessInput.style.border = '1px solid red'
        msg.style.color = 'red'

        guessInput.disabled = true;

        guessInput.style.cursor = 'no-drop';
    }


    chanceCounting();
    e.preventDefault()
}

// console.log(number);



//resetting the fields
function reseting() {
    guessInput.style.border = '1px solid #D5D5D5';
    msg.innerHTML = ''
    guessInput.disabled = false;
    playAgainBtn.remove()
    form.appendChild(guessValue)
    totalChances = 2;
    number = Math.floor(Math.random() * 10 + 1);
    guessInput.style.cursor = 'default';

}



