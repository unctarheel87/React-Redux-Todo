import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
import { addTodo } from '../actions/todos';

const TodoList = (props) => (
  <div>
    <h2>Todo List</h2>
    {props.todos.todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />
    })
    }
    <form onSubmit={(e) => {
        e.preventDefault();
        
        props.dispatch(addTodo({id: 3, text: e.target.todo.value}));
      }}>
      <input type="text" name="todo"/>
      <button type="submit">Submit</button>
    </form>
  </div>  
)

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(TodoList);