import { useContext, useState } from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import { TodosAppContext } from "../TodosProvider/TodosProvider";
import { ActionType, TodoType, ReactChangeEventType } from "../../models/types";
import TodoFilters from "../TodoFilters/TodoFilters";

import "./style.scss";

const Todos = () => {
  const { state, dispatch } = useContext(TodosAppContext);
  const [todo, setTodo] = useState<string>("");
  const [filter, setFilter] = useState("all");

  const handleFilterTodos = (event: ReactChangeEventType<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleAddTodo = (
    e: React.FormEvent<HTMLFormElement>,
    newTodo: string
  ) => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch!({ type: ActionType.ADD_TODO, payload: newTodo });
    setTodo("");
  };

  const handleDeleteCompletedTodo = () => {
    dispatch({ type: ActionType.DELETE_COMPLETED, payload: null });
  };

  const filterTotalTodos = (todo: TodoType) => !todo.isCompleted;
  const totalTodos = state.todos.filter(filterTotalTodos).length;

  return (
    <div className="todos">
      <form className="todos__form" onSubmit={(e) => handleAddTodo(e, todo)}>
        <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      <TodoList filter={filter} />
      <div className="todos__footer">
        <div className="todos__footer-total">
          {totalTodos ? <>{totalTodos} items left</> : <>No todos left</>}
        </div>
        <TodoFilters
          activeFilter={filter}
          handleFilterTodos={handleFilterTodos}
        />
        <button
          className="todos__remove-button"
          onClick={handleDeleteCompletedTodo}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default Todos;
