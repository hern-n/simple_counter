import React from 'react';

const CounterButtons = ({ increment, decrement }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <button style={{ fontSize: '20px', margin: '0 10px' }} onClick={decrement}>-</button>
      <button style={{ fontSize: '20px', margin: '0 10px' }} onClick={increment}>+</button>
    </div>
  );
};

export default CounterButtons;