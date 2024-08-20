let gameSeq=[];
let userSeq=[];
let start=0;
let level=0;
let highscore=0;
let h2=document.querySelector("h2");
let colors=["gray","mint","green","aqua"];

document.addEventListener("keypress",function(){
    if(start==0){
        start=1;
        levelUp();
    }
});
function startGame(){

}
function levelUp(){
    userSeq=[];
    h2.innerText=`level ${++level}`;
    gameFlash();
}
function gameFlash(){
    let idx=Math.floor(Math.random()*4);
    let randBtn=colors[idx];
    let btn=document.getElementById(`${randBtn}`);
    gameSeq.push(randBtn);
    console.log(gameSeq);
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
btns=document.querySelectorAll(".btn");
for(let btn of btns){
    btn.addEventListener("click",userFlash);
}

function userFlash(){
    this.classList.add("userflash");
    let btn=this;
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    userSeq.push(this.getAttribute("id"));
    console.log(`userSeq:${userSeq}`);
    checkSeq(userSeq.length-1);
}
function checkSeq(idx){
    // console.log(level);
    // let idx=level-1;
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            
        }
    }else{
        h2.innerText=`Game over your score was :${level} press any key to start`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){document.querySelector("body").style.backgroundColor='white';},150);
        reset();

    }
}
function reset(){
    start=0;
    if(highscore<level){
        highscore=level;
        h3.innerText=`High Score: ${highscore}`;
    }   
    level=0;
    gameSeq=[];
    userSeq=[];
}
let h3=document.createElement("h3");
h3.classList.add('highscore');
document.querySelector("body").appendChild(h3);
h3.innerText=`High Score: ${highscore}`;
