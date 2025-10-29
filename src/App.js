import React, { useState } from 'react';
import CounterDisplay from './components/CounterDisplay';
import ResetButton from './components/ResetButton';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#4CAF50' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
        <button style={{ fontSize: '50px', flex: 1, margin: '0 10px', padding: '10px 20px', backgroundColor: '#2E7D32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', height: '100%' }} onClick={decrement}>-</button>
      <CounterDisplay count={count} />
        <button style={{ fontSize: '50px', flex: 1, margin: '0 10px', padding: '10px 20px', backgroundColor: '#2E7D32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', height: '100%' }} onClick={increment}>+</button>
    </div>
      <ResetButton reset={reset} />
    </div>
  );
}

export default App;


