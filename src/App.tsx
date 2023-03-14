import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components 
import MusicCard from "./Components/MusicCard";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
