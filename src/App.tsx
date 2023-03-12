import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components 
import MusicCard from "./Components/MusicCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <MusicCard/>
      </header>
    </div>
  );
}

export default App;
