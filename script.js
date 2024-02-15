
let userScore = 0;
let computerScore = 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".scoreBoard")
const result_p =document.querySelector(".result > p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const donut_div = document.getElementById("donut");
const fire_div = document.getElementById("fire");
const surfer_div = document.getElementById("surfer");
const unicorn_div = document.getElementById("unicorn");
let winTorF = false;

function getComputerChoice(){
const choices = ['Rock',"Paper","Scissors","Donut","Fire", "Surfer","Unicorn"]
const randomNumber = Math.floor (Math.random() *7)
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
    case "DonutFire":
    case "DonutPaper":
    case "DonutUnicorn":
    case "FireRock":    
    case "FireScissors":
    case "Fire":
    case "RockScissors":
    case "RockDonut":
    case "RockSurfer":
    case "ScissorsSurfer":
    case "ScissorsPaper":
    case "ScissorsDonut":
    case "SurferUnicorn":
    case "SurferPaper":
    case "SurferDonut":
    case "UnicornScissors":
    case "UnicornFire":
    case "UnicornRock":
    case "PaperRock":
    case "PaperUnicorn":
    case "PaperFire":
        winTorF = true        
        win(userChoice,computerChoice)
        break;
    default:
        lose(userChoice,computerChoice) 
        break;
   }}
   else {
    draw(userChoice,computerChoice)
   }
}
function main() {
    console.log

   
    fire_div.addEventListener('click', function(){
        game("Fire");
    })
    surfer_div.addEventListener('click', function(){
        game("Surfer");
    })
    unicorn_div.addEventListener('click', function(){
        game("Unicorn");
    })
    rock_div.addEventListener('click', function(){
        game("Rock");
    })
    paper_div.addEventListener('click', function(){
        game("Paper");
    })
    scissor_div.addEventListener('click', function(){
        game("Scissors");
    })
    donut_div.addEventListener('click', function(){
        game("Donut");
    })
}
main() 