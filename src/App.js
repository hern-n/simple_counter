import React, { useState } from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';
import ResetButton from './components/ResetButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <CounterDisplay count={count} />
      <CounterButtons increment={increment} decrement={decrement} />
      <ResetButton reset={reset} />
    </div>
  );
}

export default App;

