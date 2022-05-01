import { QuizContext } from "../Helper/context";
import Question from "../Helper/Question";
import { useContext } from "react";

const Endgame = () => {
  const {score,setGameState,setScore} = useContext(QuizContext)
  const startAgain = () => {
setGameState("Quiz")
setScore(0)

  }
  return ( <div className="Endgame">
  <p>
      Game finished, you score {score} / {Question.length}
    </p>

    <button onClick={startAgain}>

      Restart quiz
    </button>
  </div>
    
  )
}
export default Endgame;