let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin ,userChoice, compChoice ) => {
    if (userWin) {
        console.log("USER WINS"); 

        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! "${userChoice} beats ${compChoice}"`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        console.log("COMPUTER WINS");

        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `You Lost! "${compChoice} beats ${userChoice}"`; 
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
};

const drawGame = () => {
    console.log("It's a DRAW!");
    msg.innerText = "Game was Draw!, Play Again!";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("choice was clicked:", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute("id");
        playGame(userChoice);
    });
});
