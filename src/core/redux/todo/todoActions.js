// src/actions/todoActions.js
export const fetchTodosRequest = () => ({
  type: "FETCH_TODOS_REQUEST",
});

export const fetchTodosSuccess = (todos) => ({
  type: "FETCH_TODOS_SUCCESS",
  payload: todos,
});

export const fetchTodosFailure = (error) => ({
  type: "FETCH_TODOS_FAILURE",
  payload: error,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(fetchTodosRequest());
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      dispatch(fetchTodosSuccess(data));
    } catch (error) {
      dispatch(fetchTodosFailure(error.toString()));
    }
  };
};

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const removeTodo = (index) => ({
  type: "REMOVE_TODO",
  payload: index,
});
