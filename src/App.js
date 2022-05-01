import './App.css';
import {useState}  from "react";
import MainMenu from './components/MainMenu';
import Quiz from './components/quiz';
import Endgame from './components/Endgame';
import { QuizContext} from './Helper/context';

function App() {
const [gameState, setGameState] = useState("Main menu");
const [score, setScore] = useState(0);

  return ( 
    <div className = "App">
    <header>
      Quiz App
    </header>
    
<QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
    {gameState === "Main menu" && <MainMenu/>}
    {gameState === "Quiz" && <Quiz/>}
    {gameState === "End game" && <Endgame />}

    </QuizContext.Provider>
    </div>
  );
}

export default App;
