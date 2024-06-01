import React, { useState } from "react";

function Counter() {
  // [variable,Function] = useState(initialValue)
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decreament() {
    if (count <= -10) {
      alert("Cannot go beyond -10");
      return;
    }
    setCount(count - 1);
  }
  function increasefive (){
    setCount(count + 5);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decreament}>-</button>
       <button onClick={increasefive}>+5</button> 
    </div>
  );
}

export default Counter;
