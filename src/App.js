import './App.css';
import { useState, useEffect } from "react";
import { GetMonster } from './components/GetMonsters';


function App() {
  return (
    
    <div className="App">
      <h1>Hyrule Monsters</h1>
      <GetMonster />
      
    </div>
  );
}

export default App;
