import {Ship} from "./ship.js"

const Gameboard  = () =>{
  const board = [[0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0]]
  const shipPlacement = JSON.parse(JSON.stringify(board));
  let ships = 0;
  
  const place  = (ship,x,y,horizontal = true)=>{
    if(outOfbounds(x,y)) return "can't place a ship here!";
    fill(horizontal,ship,x,y);     
  }

  const fill = (bool,ship,x,y) =>{
    if(!check(bool,ship,x,y)){ return console.log("cant place a ship here")}
    if(bool){
      for(let i = 0; i < ship.length; i++){
        shipPlacement[y][x+i] = ship
        board[y][x+i] = 1;}
    }
    else{
      for(let i = 0; i < ship.length; i++){
        shipPlacement[y+i][x] = ship
        board[y+i][x] = 1; }
    }
    ships++;
  }

  const boardState = ()=>{
    if (ships <= 0){return console.log("All ships are destroyed");}
    else console.log(`${ships} out of 5 ships are left`);
  }

  const recieveAttack = (x,y)=>{
    if(board[y][x] === 1){
      board[y][x] = 'X';
      shipPlacement[y][x].hit(1);
      if(shipPlacement[y][x].isSunk()){ships--}
    }
    else board[y][x] = '?';
  }

  const check = (bool,ship,x,y)=>{
    if(bool){
      for(let i = 0; i < ship.length; i++){
        if(outOfbounds(x+1,y)) return false;
        if(board[y][x+i] === 1){return false;}
    }}
    else{
      for(let i = 0; i < ship.length; i++){
        if(outOfbounds(x,y-1)) return false;
        if(board[y-i][x] === 1) {return false;}
      }}
    return true;
  }

  const view = ()=>{
    for(let x = board.length-1 ; x >= 0;  x--){
        console.log(...board[x])
    }
  }

  function outOfbounds(x,y){
    if(x > 10 || x < 0 || y > 10 || y < 0) return true;
  }
  return {board,place,view,shipPlacement,recieveAttack,boardState};
}



// const Ship = (size = 0)=>{
//   const length = size;
//   let damage = 0;
//   const sunk = false;
//   const hit = (value)=>{
//     damage +=  value;
//   }
//   const getDamage = ()=>{
//     return damage
//   }
//   const isSunk = ()=>{
//     if (damage >= length) return true
//     else return false;
//   }
//   return {length,hit,sunk,getDamage,isSunk};

// }
// let smallShip = Ship(2);
// let smallerShip = Ship(1);
// let board = Gameboard();
// board.place(smallShip,5,6,true)
// board.place(smallShip,5,6,true)
// board.place(smallShip,2,6,true)
// board.place(smallShip,2,0,false)
// board.place(smallShip,6,6,false)
// board.recieveAttack(5,6);
// board.recieveAttack(2,4);
// board.recieveAttack(6,6);
// board.view()
// board.boardState();

export{Ship,Gameboard};