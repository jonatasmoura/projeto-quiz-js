import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome'
import Question from './components/Question';
import './App.css'
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTION"})
  }, [])
  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  );
}

export default App
