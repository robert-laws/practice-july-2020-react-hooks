import React, { useState, useEffect } from 'react';

const EffectHookConditional = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Clicked once');
    document.title = `You clicked ${count} number of times today.`;
  }, [count]);

  return (
    <div>
      <h3>useEffect Conditional</h3>
      <p>Name: {name}</p>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add One to Count
      </button>
    </div>
  );
};

export default EffectHookConditional;
