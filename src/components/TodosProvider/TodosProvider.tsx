import React, { createContext, useReducer } from "react";
import {
  ActionType,
  TodoActionsType,
  TodoType,
  TodosAppContextType,
  TodosStateType,
  TodosStringActionType,
} from "../../models/types";

const initialState: TodosStateType = {
  todos: [],
};

export const todosReducer = (
  state: TodosStateType,
  action: TodoActionsType
) => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      const actionString = action as TodosStringActionType;

      return {
        ...state,
        todos: [
          ...state.todos,
          { title: actionString.payload, isCompleted: false },
        ],
      };
    }
    case ActionType.TOGGLE_COMPLETED: {
      const toggleTodoChecked = (todo: TodoType) =>
        todo === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;

      return {
        ...state,
        todos: [...state.todos.map(toggleTodoChecked)],
      };
    }
    case ActionType.DELETE_COMPLETED: {
      const clearCompletedTodos = (todo: TodoType) => !todo.isCompleted;

      return {
        ...state,
        todos: [...state.todos.filter(clearCompletedTodos)],
      };
    }
    default:
      throw new Error("Unknown action");
  }
};

const TodosAppContext = createContext<TodosAppContextType>({
  state: { todos: [] },
  dispatch: () => {},
});

interface ITodosProviderProp {
  children: React.ReactElement | React.ReactElement[];
}

const TodosProvider = ({ children }: ITodosProviderProp) => {
  const [state, dispatch] = useReducer<
    React.Reducer<TodosStateType, TodoActionsType>
  >(todosReducer, initialState);

  const TodosAppContextState = {
    state,
    dispatch,
  };

  return (
    <TodosAppContext.Provider value={TodosAppContextState}>
      {children}
    </TodosAppContext.Provider>
  );
};

export { TodosProvider, TodosAppContext };
