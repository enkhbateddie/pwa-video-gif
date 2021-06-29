import React, { useState, useEffect } from 'react';
import './App.css';

import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

function App() {
  const [message, setMessage] = useState();
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();

  const ffmpeg = createFFmpeg({ 
    log: true,
    progress: ({ ratio }) => {
      setMessage(`Complete: ${(ratio * 100.0).toFixed(2)}%`)
    },
  });

  const load = async () => {
    await ffmpeg.load();
  }

  useEffect(() => {
    load();
  }, [])

  const convertToGif = async () => {
    // Write the file to memory 
    ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

    // Run the FFMpeg command
    await ffmpeg.run('-i', 'test.mp4', '-t', '2.0', '-ss', '2.0', '-f', 'gif', 'out.gif');

    // Read the result
    const data = ffmpeg.FS('readFile', 'out.gif');

    // Create a URL
    const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
    setGif(url)
  }

  return (
    <div className="App">
      { video && <video
        controls
        width="250"
        src={URL.createObjectURL(video)}>
      </video>}
      <br />
      <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />
      <h3>Result</h3>
      <p>{message}</p>
      <button onClick={convertToGif}>Convert</button>
      { gif && <img src={gif} width="250" />}
    </div>
  )
}

export default App;