let userScore = 0;
let compScore = 0;

const userChoice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScoreData = document.querySelector("#my-score");
const compScoreData = document.querySelector("#comp-score");



const genCompChoice = () => {
     const opt = ["rock", "paper", "scissors"];
     const ind = Math.floor(Math.random() * 3);

     return opt[ind];
}

const drawGame = () => {
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "#081b31";
}

const userWin = (userChoice, compChoice) => {
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

    userScore++;
    userScoreData.innerText = userScore;
}

const compWin = (userChoice, compChoice) => {
    msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";

    compScore++;
    compScoreData.innerText = compScore;
}

const playGame = (userChoice) => {
     const compChoice = genCompChoice();

     if(userChoice === compChoice){
        drawGame();
     }
     else{
        // let userWin = true;
        if(userChoice === "paper"){
            if(compChoice === "rock"){
                userWin(userChoice, compChoice);
            }
            else{
                compWin(userChoice, compChoice);
            }
        }
        else if(userChoice === "rock"){
            if(compChoice === "scissors"){
                userWin(userChoice, compChoice);
            }
            else{
                compWin(userChoice, compChoice);
            }
        }
        else{
            if(compChoice === "paper"){
                userWin(userChoice, compChoice);
            }
            else{
                compWin(userChoice, compChoice);
            }
        }
     }

};

userChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
});  

