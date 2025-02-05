import {Gameboard} from "./board.js"
import {Ship} from "./ship.js"
const Player = (name,ai = false) => {
  const board = Gameboard();
  let turn = false;
  let playerName = name;
  const carrier = Ship(5);
  const battleship = Ship(4);
  const cruiser = Ship(3);
  const submarine = Ship(3);
  const destroyer = Ship(2);
  const ships = [carrier,battleship,cruiser,submarine,destroyer]

  const getBoard = ()=>{
    return board;
  }
  const getTurn = ()=>{
    return turn;
  }
  const changeTurn =  (bool)=>{
    turn = bool;
  }
  const getShips = ()=>{
    return ships;
  }
  const playerAi = () =>{
    return Math.floor(Math.random() * 10);
  }
  const changeName = (newName)=>{
    playerName = newName;
  }
  const getName = ()=>{
    return playerName;
  }

  return {getBoard,getShips,getName,ships,playerAi,ai,getTurn,changeTurn,changeName};
}

export {Player}