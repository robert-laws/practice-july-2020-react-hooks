import React, { useState } from 'react';

const StateHook = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Basic useState Hook</h3>
      <button onClick={handleClick}>Count is {count}</button>
    </div>
  );
};

export default StateHook;
