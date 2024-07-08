let userscore=0;
let compscore=0;
const  userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const drawGame=()=>{

console.log("game was draw");
msg.innerText="Game waas draw";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win! ${userChoice} beats ${compChoice}`;
    } else{
        compscore++;
        compscorepara.innerText=compscore ;
        console.log("you lose");
        msg.innerText=`you lose! ${compChoice} beats${userChoice}`;
    }
};

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
const compChoice=genCompChoice();
console.log("comp choice=",compChoice);

if(userChoice===compChoice){
drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    } else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;}
    
    else{
        userWin=compChoice==="rock"?false:true;    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const  userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });

});