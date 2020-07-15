import React, { useState } from 'react';
import EffectHookOneTime from './EffectHookOneTime';

const EffectHookCleanup = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <EffectHookOneTime />}
    </div>
  );
};

export default EffectHookCleanup;
