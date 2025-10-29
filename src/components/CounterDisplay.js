import React from 'react';

const CounterDisplay = ({ count }) => {
  return (
    <div style={{ fontSize: '100px', textAlign: 'center' }}>{count}</div>
  );
};

export default CounterDisplay;