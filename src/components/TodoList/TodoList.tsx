import { useContext } from "react";
import { ActionType, TodosListType, TodoType } from "../../models/types";
import { TodosAppContext } from "../TodosProvider/TodosProvider";

import "./style.scss";

interface ITodoList {
  filter: string;
}

const TodoList = ({ filter }: ITodoList) => {
  const { state, dispatch } = useContext(TodosAppContext);

  const handleToggleIsCompleted = (targetTodo: TodoType) => {
    dispatch({ type: ActionType.TOGGLE_COMPLETED, payload: targetTodo });
  };

  const getTodosByFilter = (todos: TodosListType) => {
    if (filter === "active") return todos.filter((todo) => !todo.isCompleted);
    if (filter === "completed") return todos.filter((todo) => todo.isCompleted);
    return todos;
  };

  const filtredTodos: TodoType[] = getTodosByFilter(state.todos);

  return (
    <ul>
      {filtredTodos.map((todo, index) => {
        const { title, isCompleted } = todo;
        return (
          <li
            key={index}
            className={`todo ${isCompleted ? "todo--completed" : ""}`}
          >
            <label className="todo__checkbox-label">
              <input
                className="todo__checkbox"
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleToggleIsCompleted(todo)}
              />
            </label>
            <div className="todo__title">{title}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
