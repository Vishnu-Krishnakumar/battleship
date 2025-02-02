import {Gameboard} from "./board.js"
import {Ship} from "./ship.js"
const Player = (name,ai = false) => {
  const board = Gameboard();
  const playerName = name;
  
  const carrier = Ship(5);
  const Battleship = Ship(4);
  const Cruiser = Ship(3);
  const Submarine = Ship(3);
  const Destroyer = Ship(2);
  

  const getBoard = ()=>{
    return board;
  }

  return {getBoard};
}

export {Player}