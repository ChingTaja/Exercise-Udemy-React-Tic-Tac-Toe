import { useState, useCallback } from 'react';
import QUESTIONS from './question';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((preUserAnswers) => {
      return [...preUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
  // complete

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
