import React from 'react';
import './App.scss';
import StateHook from './components/useState/StateHook';
import StateHookPrevious from './components/useState/StateHookPrevious';
import StateHookObject from './components/useState/StateHookObject';
import StateHookArray from './components/useState/StateHookArray';

function App() {
  return (
    <div className='App'>
      <h1>App</h1>
      <hr />
      <StateHook />
      <hr />
      <StateHookPrevious />
      <hr />
      <StateHookObject />
      <hr />
      <StateHookArray />
    </div>
  );
}

export default App;
