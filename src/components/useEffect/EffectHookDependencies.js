import React, { useState, useEffect } from 'react';

const EffectHookDependencies = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    // define a function in useEffect - shows what dependencies are needed in dependency array
    // const doSomething = () => {
    //   console.log(count);
    // };

    // doSomething();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h3>useEffect - Dependencies Issues</h3>
      <p>{count}</p>
    </div>
  );
};

export default EffectHookDependencies;
