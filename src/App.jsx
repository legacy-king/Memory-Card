import { useState } from 'react';
import ScoreBoard from './ScoreBoard.jsx';
import CardGrid from './CardGrid.jsx';

function App () {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore} />
      <CardGrid setScore={setScore} score={score} bestScore={bestScore} setBestScore={setBestScore} />
    </>
  )
}

export default App;