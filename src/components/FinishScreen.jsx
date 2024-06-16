import React from "react";

function FinishScreen({ points, maxPoints, highscore }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🥇";
  } else if (percentage >= 80) {
    emoji = "🥈";
  } else if (percentage >= 60) {
    emoji = "🥉";
  } else {
    emoji = "👎";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You socred <strong>{points}</strong> out of
        {maxPoints}
      </p>
      <p className="result">
        Your score is <strong>{percentage}%</strong>
      </p>
      <p className="highscore">{`Highscore: ${highscore} points`}</p>
    </>
  );
}

export default FinishScreen;
