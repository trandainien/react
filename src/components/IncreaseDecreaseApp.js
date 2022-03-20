import React, { useState } from "react";

function IncreaseDecreaseApp() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default IncreaseDecreaseApp;
