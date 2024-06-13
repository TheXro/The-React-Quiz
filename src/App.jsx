import React, { useEffect, useReducer } from 'react'
import Header from './Header'
import Main from './Main'

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

  useEffect(() => {
    fetch('http://localhost:3001/questions')
    .then((response) => response.json())
    .then((data) => dispatch({type: 'dataReceived', payload: data}))
    .catch((error) => console.error(error))
  },[]);

  return (
    <div className='app'>
      <Header/>
      <Main>
        <h1>React App</h1>
        <p>Simple React App with custom hooks</p>
      </Main>
    </div>
  )
}

export default App