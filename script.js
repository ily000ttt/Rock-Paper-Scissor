//         https://www.youtube.com/watch?v=jaVNP3nIAv0
let userScore = 0;
let computerScore = 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".scoreBoard")
const result_div =document.querySelector(".result")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
function getComputerChoice(){
const choices = ['Rock',"Paper","Scissors"]
const randomNumber = Math.floor (Math.random() *3)
return choices[randomNumber];
}
function win(user, computer)
{
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(user, computer)
}
function lose()
{
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}
function draw(){
    console.log(userScore)
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