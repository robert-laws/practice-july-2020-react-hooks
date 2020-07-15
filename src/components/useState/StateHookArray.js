import React, { useState } from 'react';

const StateHookArray = () => {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <h3>useState with Array</h3>
      <ul className='state-hook-array'>
        <button onClick={handleClick}>Add a Number</button>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateHookArray;
