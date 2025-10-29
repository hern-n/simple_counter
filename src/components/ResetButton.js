import React from 'react';

const ResetButton = ({ reset }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={reset}>Reset</button>
    </div>
  );
};

export default ResetButton;