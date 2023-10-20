import './App.css';
import MoleContainer from './Components/MoleContainer'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {gameStarted ? (
        <>
          {score}
          {createMoleHill()}
        </>
      ) : (
        <div className="splashContainer">
          <h2>Welcome to the Mole Game!</h2>
          <button onClick={handleStartGame}>Start</button>
        </div>
      )}
    </div>
  );
}

export default App;