import React from 'react';
import './App.scss';
import StateHook from './components/StateHook';
import StateHookPrevious from './components/StateHookPrevious';
import StateHookObject from './components/StateHookObject';

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
    </div>
  );
}

export default App;
