export default function todoReducer(state = initialState, action) {
  switch (action.type) {
      case 'ADD_TODO':
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              id: action.id,
              text: action.text
            }
          ]
        })
      case 'REMOVE_TODO':
        return Object.assign({}, state, {
          todos: state.todos.filter((todo) => {
                   return todo.id !== action.id
                })
        })
      default:
        return state
  }
}

const initialState = {
  todos: [
    {id: 0, text: 'pay rent'},
    {id: 1, text: 'buy groceries'}
    ]
  }