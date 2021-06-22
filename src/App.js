import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(true)
  const handleClick = () => {
    setCount(count === false ? true : false)
  }
  return (
    <div className="App">
      <p>Please choose your video</p>
      <button onClick={handleClick}>upload</button>
    </div>
  );
}

export default App;
