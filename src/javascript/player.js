import {Gameboard} from "./board.js"
import {Ship} from "./ship.js"
const Player = (name,ai = false) => {
  const board = Gameboard();
  const playerName = name;
  const carrier = Ship(5);
  const battleship = Ship(4);
  const cruiser = Ship(3);
  const submarine = Ship(3);
  const destroyer = Ship(2);
  const ships = [carrier,battleship,cruiser,submarine,destroyer]

  const getBoard = ()=>{
    return board;
  }

  const getShips = ()=>{
    return ships;
  }

  return {getBoard,getShips,playerName,ships};
}

export {Player}