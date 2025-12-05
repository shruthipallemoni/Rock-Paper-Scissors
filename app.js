// let userScore = 0;
// let computerScore = 0;

// const msg = document.querySelector("#msg");
// const choices = document.querySelectorAll(".choice");
// const userScoreP = document.querySelector(".user-score");
// const compScoreP = document.querySelector(".comp-score");

// // Generate computer's random choice
// const getComputerChoice = () => {
//     const options = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * options.length);
//     return options[randomIndex];
// };

// // Handle Draw
// const draw = () => {
//     console.log('The game was draw');
//     msg.innerHTML = "The game was draw!";
// };

// // Handle Winner
// const Winner = (userWin, userChoice, cmpChoice) => {
//     if (userWin) {
//         console.log('You won');
//         userScore++;
//         userScoreP.innerHTML = userScore;
//         msg.innerHTML = `🎉 You Won! Your <b>${userChoice}</b> beats <b>${cmpChoice}</b>`;
//     } else {
//         console.log('You lost');
//         computerScore++;
//         compScoreP.innerHTML = computerScore;
//         msg.innerHTML = `😢 You Lost! <b>${cmpChoice}</b> beats your<b>${userChoice}</b>`;
//     }
// };

// // Main Game Function
// const playGame = (userChoice) => {
//     console.log('The user choice is ' + userChoice);

//     let cmpChoice = getComputerChoice();
//     console.log('The Computer choice is ' + cmpChoice);

//     if (cmpChoice === userChoice) {
//         draw();
//     } else {
//         let userWin = false;

//         if (userChoice === "paper") {
//             userWin = (cmpChoice === "rock");
//         } else if (userChoice === "rock") {
//             userWin = (cmpChoice === "scissors");
//         } else if (userChoice === "scissors") {
//             userWin = (cmpChoice === "paper");
//         }

//         Winner(userWin, userChoice, cmpChoice);
//     }
// };

// // Add Event Listeners for choices
// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         let userChoice = choice.id;
//         playGame(userChoice);
//     });
// });//My version of code...
//Computer version of code...
let userScore = 0;
let computerScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScoreP = document.querySelector(".user-score");
const compScoreP = document.querySelector(".comp-score");

// Rules: each choice beats the value
const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

// Random computer choice
const getComputerChoice = () => {
    const options = Object.keys(rules);
    return options[Math.floor(Math.random() * options.length)];
};

// Play Round
const playGame = (userChoice) => {
    let cmpChoice = getComputerChoice();

    if (userChoice === cmpChoice) {
        msg.innerHTML = `😐 It's a Draw! You both chose <b>${userChoice}</b>`;
        return;
    }

    if (rules[userChoice] === cmpChoice) {
        // User Wins
        userScore++;
        userScoreP.innerHTML = userScore;
        msg.innerHTML = `🎉 You Won! <b>${userChoice}</b> beats <b>${cmpChoice}</b>`;
    } else {
        // Computer Wins
        computerScore++;
        compScoreP.innerHTML = computerScore;
        msg.innerHTML = `😢 You Lost! <b>${cmpChoice}</b> beats <b>${userChoice}</b>`;
    }
};

// Add Event Listeners
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScoreP.innerHTML = userScore;
    compScoreP.innerHTML = computerScore;
    msg.innerHTML = "🔄 Game restarted! Play your move.";
});

