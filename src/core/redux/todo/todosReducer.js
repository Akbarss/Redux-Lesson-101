const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case "FETCH_TODOS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default todosReducer;
