export const addTodo = function({ id = 0, text = '' }) {
  return {
    type: 'ADD_TODO',
    id,
    text
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}