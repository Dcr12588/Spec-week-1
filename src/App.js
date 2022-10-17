//useState allows you to alter values to variables using functions in waterfall affect
import { useState } from 'react';
//CSS links to jsx
import './App.css';
//Links jsx to prop functions 
import Square from './Square';

function App() {
  //Props using useState to alter values when needed
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [players, setPlayers] = useState(true);
  //Adding funcitons to tell useState props what they need to do 
  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return(
            <Square
            squarevalue={value}
            index={index}
            squares={squares}
            setSquares={setSquares}
            players={players}
            setPlayers={setPlayers}
            />
            );
        })};
      </div>
    </div>
  );
}

export default App;

christian
