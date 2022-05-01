import { useContext } from 'react';
import { QuizContext } from '../Helper/context';

const MainMenu = () => {
  const { setGameState} = useContext(QuizContext)
  return ( <div className='Menu'>
    <p>
      Main Menu
    </p>

    <button onClick={() => setGameState("Quiz")}> Start Quiz</button>
    </div>
  )
};

export default MainMenu