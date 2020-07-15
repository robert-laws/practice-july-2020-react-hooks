import React from 'react';
import './App.scss';
import StateHook from './components/StateHook';
import StateHookPrevious from './components/StateHookPrevious';

function App() {
  return (
    <div className='App'>
      <h1>App</h1>
      <hr />
      <StateHook />
      <hr />
      <StateHookPrevious />
    </div>
  );
}

export default App;
