import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Volume2, VolumeX } from 'lucide-react';

function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(new Audio('/path/to/your/music.mp3'));

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const handleMusicToggle = () => {
    setIsPlayingMusic(!isPlayingMusic);
  };

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <button
          onClick={handleMusicToggle}
          className="fixed bottom-5 right-5 bg-blue-500 p-2 rounded-full"
        >
          {isPlayingMusic ? <Volume2 /> : <VolumeX />}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;