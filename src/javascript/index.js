import "./styles.css";
import {Player} from "./player"

let playerOne = Player("Terry",false);
let playerTwo = Player("Jacob",true);
let playerOneBoard = document.getElementById("player_One");
let playerTwoBoard = document.getElementById("player_Two");
let imgs = document.getElementsByTagName("img");
let winner = document.getElementById("winner");
let name = document.getElementById("nameForm");
// let playerShipsPlacement = document.getElementById("player_Ships");
let dragged = null;
let index = null;
let nameSubmit = document.getElementById("playerOneSubmit");
// let playerTwoTurn = false;
// let playerOneWinner = false;
// let playerTwoWinner = false;
let opposingPlayer;
nameSubmit.addEventListener("click",()=>{
  document.getElementById("playerOneName").innerText = `Admiral ${name.value}`;
  playerOne.changeName(name.value);
})
playerOne.changeTurn(true);
drag(imgs);
createBoard(playerOneBoard,playerOne,1);
createBoard(playerTwoBoard,playerTwo,2);

function createBoard(board,player,pNumber){
  createGrid(board,player,pNumber);

  if(player.ai === true){
    let playerBoard = player.getBoard();
    for(let i = 0; i < 5; i++){
      let x = player.playerAi();
      let y = player.playerAi();
      while(!playerBoard.place(player.ships[i],y,x)){
        x = player.playerAi();
        y = player.playerAi();
      }
    }
  }
}

function createGrid(board,player,pNumber){

  for(let x = 9; x >= 0; x--){
    for(let y = 0; y < 10; y++){
      let grid = document.createElement("div")
      grid.setAttribute("id",`${x} ${pNumber} ${y}`);
      grid.style.display = "grid";
      grid.addEventListener("click",()=>{
        if(!player.ai){return;}
        if(grid.innerText === "?" || grid.innerText ==="X"){return;}
        let attackX = x;
        let attackY = y;
        if(pNumber === 2) opposingPlayer = playerOne;
        else opposingPlayer = playerTwo;
        console.log(attackX + " " + attackY + " on player " + pNumber);
        attack(player,opposingPlayer,pNumber,attackX,attackY);
        if(player.getBoard().boardState()){
          winner.innerText = `${opposingPlayer.getName()} is the Winner!`;
          return;
        }
        attack(opposingPlayer,player,1,attackX,attackY)
        if(opposingPlayer.getBoard().boardState()){
          winner.innerText = `${player.getName()} is the Winner!`;
          return;
        }
      })

      grid.addEventListener("dragover",(event)=>{
        if(player.ai){return;}
        event.preventDefault();
      })

      grid.addEventListener("drop",(event)=>{
        if(player.ai){return;}
        event.preventDefault();
        if(player.getBoard().place(player.ships[index],y,x)){
          grid.appendChild(dragged);
        }
        else console.log("Cant be placed there!")
       
      })
      board.appendChild(grid);
    }
  }  

}

function attack(player,opposingPlayer,pNumber,attackX,attackY){
  console.log(player.getName());
  if(opposingPlayer.ai === true){
    attackX = opposingPlayer.playerAi();
    attackY = opposingPlayer.playerAi();
    console.log("Checking " + attackX + " " + attackY);
    while(player.getBoard().getBoard()[attackX][attackY] === '?' || player.getBoard().getBoard()[attackX][attackY] === 'X'){
      attackX = opposingPlayer.playerAi();
      attackY = opposingPlayer.playerAi();  
      console.log(attackX + " " + attackY);
      console.log("changed");
    }
  }
  if(player.getBoard().recieveAttack(attackX,attackY)){
    let text = document.createElement("div");
    text.setAttribute("id","mark");
    text.innerText = "X";
    document.getElementById(`${attackX} ${pNumber} ${attackY}`).appendChild(text);
  }
  if (player.getBoard().getBoard()[attackX][attackY] === 0 || player.getBoard().getBoard()[attackX][attackY] ==='?'){
    console.log(`test ${attackX} ${attackY}`)
    let text = document.createElement("div");
    text.setAttribute("id","mark");
    text.innerText = "?";
    document.getElementById(`${attackX} ${pNumber} ${attackY}`).appendChild(text);
  }
}

// function turn(pNumber){
//   console.log(pNumber)
//   console.log(playerOneTurn);
//   console.log(playerTwoTurn);
//   if(pNumber === 1 && playerOneTurn === false) return false;
//   else if(pNumber === 1 && playerTwoTurn === false){
//     playerOneTurn = false;
//     playerTwoTurn = true;
//     return true;
//   }
//   if(pNumber === 2 && playerTwoTurn === false) return false;
//   else{
//     playerTwoTurn = false;
//     playerOneTurn = true;
//     return true;
//   }
// }

function drag(imgs){
    for(let i = 0; i < imgs.length;i++){
        imgs[i].setAttribute("index",i);
        imgs[i].addEventListener("dragstart",(ev)=>{
            ev.dataTransfer.setData("text/plain", ev.target.id);
            ev.dataTransfer.dropEffect = "move"
            dragged = ev.target;
            index = i;
        });
    }
}
