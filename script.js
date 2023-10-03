console.log("Welcome To TicTace Game");
let gsound = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gover =new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";

//Function To Change The Turn
const changeTurn = ()=>{
     return turn === "X" ? "0" : "X"
}

// Function To Check For A Win
let boxtext = document.getElementsByClassName('box-txt')
const Checkwin = ()=>{
    let Wins = [
        [0,1,2 , 5 , 5 , 0],
        [3,4,5 , 5 , 15 ,0],
        [6,7,8 , 5 , 25 , 0],
        [0,3,6 , -5 , 15 ,90],
        [1,4,7 , 5 , 15 , 90],
        [2,5,8 , 1 ,5, 15 , 90],
        [0,4,8 , 1, 5 , 15 , 45],
        [2,4,6, 5 , 15 , 135],

    ] 
Wins.forEach(e =>{
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText)
    && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)
    && (boxtext[e[0]].innerText !== "")) 
{

        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        isgameover= true
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '100px';
    document.querySelector('.line').style.transform = `translate(${[3]}vw, ${[4]}vw) rotate(${[5]}deg)`
    }
})
}
// Game Logics 
// gsound.play();
let boxes = document.getElementsByClassName("box-cont");
Array.from(boxes).forEach(element => {
    let boxtxt = element.querySelector('.box-txt');
   element.addEventListener('click', ()=>{
    if (boxtxt.innerText ===''){
        boxtxt.innerText = turn;
        turn = changeTurn();
        audioturn.play();
        Checkwin();
        if(!isgameover){

       
        document.getElementsByClassName("info")[0].innerText = "Turn For : "+ turn;
    }
}
    })
});

// Add On Click Listener To Reset Button

reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.box-txt')
    Array.from(boxtext).forEach(element=>{
        element.innerText = "";
 });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText='Turn For : ' + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width ='0px';
});