import React from 'react'

function Progress({i, numQuestions, points, Maxpoints, answer}) {
    // console.log(i, numQuestions, points, Maxpoints)
  return (
    <div>
        <header className='progress'>
        <progress value={i + Number(answer !== null)} max={numQuestions} ></progress>
            <p>Question <strong>{i+1}</strong> / {numQuestions}</p>

            <p><strong>{points}</strong> / {Maxpoints}</p>
        </header>
    </div>
  )
}

export default Progress