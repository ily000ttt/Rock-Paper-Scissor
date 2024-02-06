//         https://www.youtube.com/watch?v=jaVNP3nIAv0
const computerScore = 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".scoreBoard")
const result_div =document.querySelector(".result")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");

rock_div.addEventListener('click', function(){
    //game("rock");
    console.log("ROOOCK");
})
paper_div.addEventListener('click', function(){
    //game("paper");
    console.log("pApEr");
})