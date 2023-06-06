import Square from './Square';
import { useState } from 'react';
import './App.css';

function App() {
  let gameBoard = ['', '', '', '', '', '', '', '', '']
  const [squares, setSquares] = useState(gameBoard);
  const [player, setPlayer] = useState(true);

  const handleClick = () =>{
    setSquares(gameBoard)
    setPlayer(true)
  }

  const calculateWinner = (arr) => {
    let lines = [[0,1,2], [3,4,5], [6,7,8], //=>horizontal
                  [0,4,8], [2,4,6], //=> diagonal
                   [0,3,6], [1,4,7], [2,5,8]] //=>vertical

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
            return `Player ${arr[a]} Won!`
        }
      }
      return "Who will win?";
  }

  return (

    <div className="App">

      <h1 className="App-title">Tic-tac-toe</h1>
      <span>{calculateWinner(squares)}</span>
    <div className='container'>   
        {
          squares.map((item,index)=> {
            return(

              <Square 
              key={index}
              index={index}
              squareValue = {item}
              squares={squares} 
              setSquares={setSquares} 
              player={player} 
              setPlayer={setPlayer}>
 
              </Square>
            )
          })
        }
        </div>
        <br />
        <br />
        <button onClick={handleClick}> Reset Board</button>

    </div>
  );
}

export default App;
