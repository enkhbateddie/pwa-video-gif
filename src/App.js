import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(true)
  const handleClick = () => {
    setCount(count === false ? true : false)
  }
  return (
    <div className="App">
      {String(count)}
      <br/>
      <button onClick={handleClick}>button</button>
    </div>
  );
}

export default App;
