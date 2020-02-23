import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const handleDecrease = () => {
    const newCount = count === 0 ? 0 : count - 1;
    setCount(newCount);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div id="counter-container">
      <div>
        <h2 id="heading">Click either of the buttons below</h2>
        <h3 id="number-of-count">{`Number of clicks: ${count}`}</h3>
        <button
          id="increase"
          type="button"
          onClick={handleIncrease}
        >
          Increase Count
        </button>
        <button
          id="decrease"
          type="button"
          onClick={handleDecrease}
        >
          Decrease Count
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
