import React from 'react';

const CounterButtons = ({ increment, decrement }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <button style={{ fontSize: '50px', margin: '0 20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={decrement}>-</button>
      <button style={{ fontSize: '50px', margin: '0 20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={increment}>+</button>
    </div>
  );
};

export default CounterButtons;