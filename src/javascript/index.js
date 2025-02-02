import "./styles.css";
import {Player} from "./player"

let playerOne = Player("Terry",false);
let playerTwo = Player("Mat",true);
let playerOneBoard = document.getElementById("player_One");
let playerTwoBoard = document.getElementById("player_Two");
let imgs = document.getElementsByTagName("img");
let playerShipsPlacement = document.getElementById("player_Ships");
let dragged = null;
createBoard(playerOneBoard,playerOne,1);
createBoard(playerTwoBoard,playerTwo,2);

function createBoard(board,player,pNumber){
  createGrid(board,player,pNumber);
  drag(imgs);
}

function createGrid(board,player,pNumber){
    for(let x = 9; x >= 0; x--){
        for(let y = 0; y < 10; y++){
          let grid = document.createElement("div")
          grid.setAttribute("id",`${y} ${pNumber} ${x}`);
          grid.addEventListener("click",()=>{
            console.log(y + " " + x);
            if(player.getBoard().recieveAttack(y,x)){
                console.log(document.getElementById(`${y} ${pNumber} ${x}`))
                document.getElementById(`${y} ${pNumber} ${x}`).innerText = "X";
            }
            else{
                document.getElementById(`${y} ${pNumber} ${x}`).innerText = "?";
            }
            player.getBoard().view();
          })

          grid.addEventListener("dragover",(event)=>{
            event.preventDefault();
          })

          grid.addEventListener("drop",(event)=>{
            event.preventDefault();
            console.log(event.grid);
            grid.appendChild(dragged);
          })

          board.appendChild(grid);
        }
      }      
}

function drag(imgs){
    for (let img of imgs){
        img.addEventListener("dragstart",(ev)=>{
            ev.dataTransfer.setData("text/plain", ev.target.id);
            ev.dataTransfer.dropEffect = "move"
            dragged = ev.target;
        })
    }
}
function boardRefresh(){

}