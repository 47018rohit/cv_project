import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Preview from './components/Preview';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#1f342a'
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container" >
        <Form mode={mode} />
        <Preview />
      </div>
    </>
  );
}

export default App;
