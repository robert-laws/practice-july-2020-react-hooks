import React, { useState, useEffect } from 'react';

const EffectHookOnRender = () => {
  const [count, setCount] = useState(0);

  // execute function every render of the component
  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div>
      <h3>useEffect after Render</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked
      </button>
    </div>
  );
};

export default EffectHookOnRender;
