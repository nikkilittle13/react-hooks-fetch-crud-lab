import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questions) => setQuestions(questions))
  }, [])

  function handleDeletedQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions)
  }

  function updateQuestion(questionId, updatedQuestion) {
    const updatedQuestions = questions.map(question => {
      if (question.id === questionId) {
        return updatedQuestion
      } else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem question={question} onDeleteQuestion={handleDeletedQuestion}
        onUpdateQuestion={updateQuestion}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;