import React, { useState, useEffect } from 'react';

const EffectHookOneTime = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const logMousePosition = (e) => {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    console.log('useEffect for mousemove called...');
    window.addEventListener('mousemove', logMousePosition);

    // cleanup code - included in useEffect and returned as a function (example - event handlers, timers, etc.)
    return () => {
      console.log('Component un-mounting code');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      <h3>useEffect Run One Time</h3>
      <p>X position: {coordinates.x}</p>
      <p>Y position: {coordinates.y}</p>
    </div>
  );
};

export default EffectHookOneTime;
