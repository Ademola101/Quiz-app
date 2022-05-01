import { useState, useContext } from "react";
import Question from "../Helper/Question";
import { QuizContext } from "../Helper/context";

const Quiz = () => {
  const [index, setindex] = useState(0);

  const [option, setOption] = useState("");

  const {score, setScore, setGameState} = useContext(QuizContext)

  let currentQuestion = Question[index]

  const finishQuiz = () => {
    currentQuestion.answer === option && setScore(score + 1);
      
    setGameState("End game")


  }
  
  
  const nextQuestion = () => {
    if(currentQuestion.answer === option){
      setScore(score + 1)
    }
    setindex(index + 1)
  }

  
  return (<div className="Quiz"> 
    <p>
      Quiz
    </p>
    <main className="main">
      <div>
      {currentQuestion.Question}
      <label>
<input type="radio" name="option" onChange={() => setOption("A")} />
{currentQuestion.optionA}

      </label>
      <label>
<input type="radio" name="option" onChange={() => setOption("B")} />
{currentQuestion.optionB}

      </label>
      <label>
<input type="radio" name="option" onChange={() => setOption("C")} />
{currentQuestion.optionC}

      </label>
      <label>
<input type="radio" name="option" onChange={() => setOption("D")} />
{currentQuestion.optionD}

      </label>
      </div>
      
       </main> {
         index === Question.length-1 ? <button onClick={finishQuiz}>
           Finish question
         </button> :
    <button onClick={nextQuestion}>
      next question
    </button>}
    </div>
  )
};

export default Quiz