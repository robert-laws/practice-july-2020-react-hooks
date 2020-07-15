import React from 'react';
import './App.scss';
import StateHook from './components/useState/StateHook';
import StateHookPrevious from './components/useState/StateHookPrevious';
import StateHookObject from './components/useState/StateHookObject';
import StateHookArray from './components/useState/StateHookArray';
import EffectHookOnRender from './components/useEffect/EffectHookOnRender';

function App() {
  return (
    <div className='App'>
      <h1>useState</h1>
      <hr />
      <StateHook />
      <hr />
      <StateHookPrevious />
      <hr />
      <StateHookObject />
      <hr />
      <StateHookArray />
      <hr />
      <h1>useEffect</h1>
      <EffectHookOnRender />
    </div>
  );
}

export default App;
