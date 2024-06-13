/* eslint-disable react/prop-types */
import React from "react";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option 
          ${hasAnswered ? (i === question.correctOption ? "correct" : "") : ""} 
          ${
            hasAnswered && i !== question.correctOption && i === answer
              ? "wrongSelected"
              : ""
          }
          `}
          key={i}
          disabled={hasAnswered}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: i });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
