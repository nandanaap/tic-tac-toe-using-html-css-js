let boxes=document.querySelectorAll(".box");

let resetbtn=document.querySelector("#rest-btn");
let msgcontainer=document.querySelector(".Msgcontainer");
let msg=document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");
let turn0=true;
let count=0;
const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8] ];

const restgame=()=>{
    turn0=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
    resetbtn.classList.add("hide");
   
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      console.log ("box was clicked");
      
        if (turn0){
            box.innerText="x";
            turn0=false;
        }
        else{
            box.innerText="0";  
            turn0=true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
          gameDraw();}
        });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    resetbtn.classList.add("hide");
    disableboxes();
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    resetbtn.classList.add("hide");
    disableboxes();
   
    
};
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let postval1=boxes[pattern[0]].innerText;
        let postval2=boxes[pattern[1]].innerText;
        let postval3=boxes[pattern[2]].innerText;
        if(postval1 !=""&& postval2 !="" && postval3!=""){
            if (postval1===postval2 && postval2===postval3){
                
                showwinner(postval1);
                return true;
            }
        }
    
    }

};
newGameBtn.addEventListener("click", restgame);
resetbtn.addEventListener("click", restgame);