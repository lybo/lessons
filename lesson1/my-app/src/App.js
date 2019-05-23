import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App({
  string,
}) {
  return (
    <div className="App">
      <header className="App-header">
        <Counter string={string} value={1} />
      </header>
    </div>
  );
}

export default App;
