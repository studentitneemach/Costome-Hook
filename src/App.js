import React from 'react';
import './App.css';
import { BackWordCounter } from './Component/BackwardCounter';
import { ForWordCounter } from './Component/ForwardCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ForWordCounter/>
      <BackWordCounter />
      </header>
    </div>
  );
}

export default App;
