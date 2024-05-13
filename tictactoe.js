let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newGamebtn =document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector ("#msg");


let turnO=true;//playerX,player0
//2d Arrays

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){//player 0
            box.innerText="O";
            turnO=false;
        }else{//player x
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
    const showWinner =(winner)=>{
        msg.innerText=`Congratulations,Winner is a ${winner}`
        msgContainer.classList.remove("hide")
        disabledBoxes();
    };


 const checkWinner=()=>{
        for(let pattern of winPatterns){

let pos1val= boxes[pattern[0]].innerText
let pos2val= boxes[pattern[1]].innerText
let pos3val= boxes[pattern[2]].innerText

if (pos1val !=""&& pos2val !="" && pos3val != ""){
    if(pos1val===pos2val&&pos2val===pos3val){

showWinner(pos1val);
    }
}
        }
   };


   newGamebtn.addEventListener("click",resetGame);
   resetbtn.addEventListener("click",resetGame);

