const Ship = (size = 0)=>{
    const length = size;
    let damage = 0;
    const sunk = false;
    const hit = (value)=>{
      damage +=  value;
    }
    const getDamage = ()=>{
      return damage
    }
    const isSunk = ()=>{
      if (damage >= length) return true
      else{
        return false
      } 
    }
    return {length,hit,sunk,getDamage,isSunk};
  
  }

  export {Ship}