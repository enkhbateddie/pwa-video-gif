import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(false)
  const [count1, setCount1] = useState(false)
  const handleClick = () => {
    setCount(count === true ? false : true)
  }
  const handleClick1 = () => {
    setCount1(count1 === true ? false : true)
  }
  
  return (
    <div className="App">
      <p>Please choose your video</p>
      <button onClick={handleClick}>upload</button>
      <br />
      <br />
      <button onClick={handleClick1}>convert</button>
    </div>
  );
}

export default App;
