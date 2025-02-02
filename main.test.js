
import {Ship,Gameboard} from "./src/javascript/board.js"

test("The object exists",()=>{
  const ship = Ship();
  expect(ship).toBeTruthy();

})

test("The length key exists",() =>{
  const ship = Ship();
  expect(ship).toHaveProperty('length');

})

test("The hit function should return a value of 3 after taking a hit of 3",()=>{
  const ship = Ship(3);
  ship.hit(3)
  expect(ship.getDamage()).toEqual(3);
})

test("The isSunk function should return true after a ship with 5 length has taken 5 damage",()=>{
    const ship = Ship(5);
  ship.hit(5);
  expect(ship.isSunk()).toEqual(true);
})

test("The isSunk function should return false after a ship with 5 length has taken 3 damage",()=>{
    const ship = Ship(5);
    ship.hit(3);
    expect(ship.isSunk()).toEqual(false);
  })

