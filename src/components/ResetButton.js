import React from 'react';

const ResetButton = ({ reset }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <button style={{ fontSize: '20px' }} onClick={reset}>Reset</button>
    </div>
  );
};

export default ResetButton;