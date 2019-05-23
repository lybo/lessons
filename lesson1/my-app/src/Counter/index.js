import React from 'react';

function Counter({
  value,
  string,
}) {
  return (
    <div className="counter">
      {string}: {value}
    </div>
  );
}

export default Counter;
