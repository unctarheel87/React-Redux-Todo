import React from 'react';
import { removeTodo } from '../actions/todos'
import { connect } from 'react-redux'
import { isCompleted, isNotCompleted } from '../actions/filters'

const Todo = ( {dispatch, id, text } ) => {
  return(
    <div>
      <h2>{id}</h2>
      <h4>{text}</h4>
      <button onClick={() => {
        dispatch(removeTodo(id));  
      }} 
      >Remove</button>
    </div>
    )
}

export default connect()(Todo);