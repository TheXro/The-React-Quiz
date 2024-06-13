/* eslint-disable react/prop-types */
import React from "react";

function StartScreen({ numberOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numberOfQuestions} questions to test your knowledge of React.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets go...
      </button>
    </div>
  );
}

export default StartScreen;
