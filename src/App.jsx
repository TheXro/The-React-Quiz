import React, { useEffect, useReducer } from 'react'
import Header from './Header'
import Hero from './Hero'
import Loader from './Loader'
import StartScreen from './StartScreen'

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading',

}

function reducer(state, action){
  switch(action.type){
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      };

    default:
      throw new Error('Invalid action type');
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const numberOfQuestions = state.questions.length;

  useEffect(() => {
    fetch('http://localhost:3001/questions')
    .then((response) => response.json())
    .then((data) => dispatch({type: 'dataReceived', payload: data}))
    .catch((error) => dispatch({type: 'dataFailed', payload: error}))
  },[]);

  console.log(state);

  return (
    <div className='app'>
      <Header/>
      <Hero>
        {state.status === 'loading' && <Loader/>}
        {state.status === 'error' && <Loader/>}
        {state.status === 'ready' && <StartScreen numberOfQuestions={numberOfQuestions}/>}
        {state.status === 'active' && <Question/>}
      </Hero>
    </div>
  )
}

export default App