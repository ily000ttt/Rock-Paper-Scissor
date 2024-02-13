//         https://www.youtube.com/watch?v=jaVNP3nIAv0
let userScore = 0;
let computerScore = 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".scoreBoard")
const result_p =document.querySelector(".result > p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice(){
const choices = ['Rock',"Paper","Scissors"]
const randomNumber = Math.floor (Math.random() *3)
return choices[randomNumber];
}

function win(userChoice, computerChoice)
{
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " vs " + computerChoice + ". You win!"
}
function lose(userChoice, computerChoice)
{
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " vs " + computerChoice + ". You lose!"
}
function draw(userChoice, computerChoice){
    result_p.innerHTML = userChoice + " vs " + computerChoice + ". Draw!"
}
function game(userChoice){
    const computerChoice = getComputerChoice()
    
    if(userChoice !== computerChoice){
     
   switch (userChoice + computerChoice)
   {
    case "RockScissors":
    case "ScissorsPaper":
    case "PaperRock":
        win(userChoice,computerChoice)
        break;
    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
        lose(userChoice,computerChoice) 
        break;
   }}
   else {
    draw(userChoice,computerChoice)
   }
}
function main() {
    console.log

rock_div.addEventListener('click', function(){
    game("Rock");
})
paper_div.addEventListener('click', function(){
    game("Paper");
})
scissor_div.addEventListener('click', function(){
    game("Scissors");
})
}
main() 