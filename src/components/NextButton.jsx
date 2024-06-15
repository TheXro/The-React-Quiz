import React from 'react'

function NextButton({dispatch, answer, index, numQuestions}) {
    if (answer === null) return null;
  if(index < numQuestions -1) return (
    <div>
        {<button
            className="btn btn-ui"
            onClick={() => {
            dispatch({ type: "nextQuestion" });
            }}
        >
            Next
        </button>}
    </div>
    )
    return (
        <div>
            {<button
                className="btn btn-ui"
                onClick={() => {
                dispatch({ type: "finish" });
                }}
            >
                Show Results
            </button>}
        </div>
    )
  
}

export default NextButton