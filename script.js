const rockButton = document.getElementById('img1')
const paperButton = document.getElementById('img2')
const scissorButton = document.getElementById('img3')
const yourChoice = document.getElementById('yourChoice')
const computerChoice = document.getElementById('computerChoice')
const gameSelector = document.getElementById('choice')
const results = document.querySelector('.results')
const winLose = document.querySelector('.winnerorloser')
const playAgain = document.querySelector('.button')
const counter1 = document.getElementById('yourCounter')
const counter2 = document.getElementById('computerCounter')


const images = ["./resources/Images/rock.png", "./resources/Images/paper.png", "./resources/Images/scissors.png"]

// assigning images for choice
rockButton.src = images[0];
paperButton.src = images[1];
scissorButton.src = images[2]

//counter
let yourCounter = 0;
let computerCounter = 0;
counter1.textContent = yourCounter;
counter2.textContent = computerCounter;


// event listners for choice
rockButton.addEventListener('click', () => {
    gameSelector.style.display = 'none'
    results.style.display = 'flex'
    yourChoice.src = images[0]
    getComputerChoice()
    if(computerChoice.src === yourChoice.src){
        winLose.textContent = `It's a tie try again!`
        counterFunc('tie')
    } else if(computerChoice.src === paperButton.src) {
        winLose.textContent = 'You lose try again!'
        counterFunc('lose')
    } else if(computerChoice.src === scissorButton.src) {
        winLose.textContent = 'You Win!!!'
        counterFunc('win')
    }

});



paperButton.addEventListener('click', () => {
    gameSelector.style.display = 'none'
    results.style.display = 'flex'
    yourChoice.src = images[1]
    getComputerChoice()
    if(computerChoice.src === yourChoice.src){
        winLose.textContent = `It's a tie try again!`
        counterFunc('tie')
    } else if(computerChoice.src === rockButton.src) {
        winLose.textContent = 'You Win!!!'
        counterFunc('win')
    } else if(computerChoice.src === scissorButton.src) {
        winLose.textContent = 'You lose try again'
        counterFunc('lose')
    }
});

scissorButton.addEventListener('click', () => {
    gameSelector.style.display = 'none'
    results.style.display = 'flex'
    yourChoice.src = images[2]
    getComputerChoice()
    if(computerChoice.src === yourChoice.src){
        winLose.textContent = `It's a tie try again!`
        counterFunc('tie')
    } else if(computerChoice.src === paperButton.src) {
        winLose.textContent = 'You win!!!!'
        counterFunc('win')
    } else if(computerChoice.src === rockButton.src) {
        winLose.textContent = 'You lose try again'
        counterFunc('lose')
    }
})

playAgain.addEventListener('click', () => {
    gameSelector.style.display = 'flex'
    results.style.display = 'none'
})


// creating computer choice
const getComputerChoice = () => {
    randNum = Math.floor(Math.random() * images.length)
    switch(randNum) {
        case 0:
            computerChoice.src = images[0]
            break;
        case 1:
            computerChoice.src = images[1]
            break;
        case 2:
            computerChoice.src = images[2]
            break;

    }
}


const counterFunc = (result) => {
    if(result === 'tie'){
        computerCounter = 0;
        yourCounter = 0;
        counter1.textContent = yourCounter;
        counter2.textContent = computerCounter;
    } else if(result === 'win') {
        yourCounter++;
        computerCounter = 0;
        counter1.textContent = yourCounter;
        counter2.textContent = computerCounter;
    } else if (result === 'lose') {
        yourCounter = 0;
        computerCounter++;
        counter1.textContent = yourCounter;
        counter2.textContent = computerCounter;
    }
}
