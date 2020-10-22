let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function compareGuesses(userGuess, computerGuess, target) {
    const userDiff = Math.abs(target - userGuess);
    const computerDiff = Math.abs(target - computerGuess);

    return userDiff === computerDiff ? true : (userDiff > computerDiff ? false : userDiff)
}

function updateScore(winner) {
    winner === "human" ? humanScore += 1 : computerScore += 1;
}

function advanceRound() {
    currentRoundNumber += 1;
}