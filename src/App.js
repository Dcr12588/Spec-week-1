import { useState } from 'react';
import './App.css';
import Square from './Square';

function App() {

  const [squares, setSquares] = useState(["","","","","","","","",""]);
  const [players, setPlayers] = useState(true);

  return (
    <div className="App">
      <Square 
        squares = {squares}
        setSquares = {setSquares}
        players = {players}
        setPlayers = {setPlayers}
      />
    </div>
  );
}

export default App;
