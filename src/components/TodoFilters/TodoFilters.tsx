import { ReactChangeEventType, TodosFiltersArrType } from "../../models/types";
import { upercaseFirst } from "../../models/utils";
import "./style.scss";

interface ITodoFiltersProp {
  activeFilter: string;
  handleFilterTodos: (event: ReactChangeEventType<HTMLInputElement>) => void;
}

const TodoFilters = ({ activeFilter, handleFilterTodos }: ITodoFiltersProp) => {
  const filtersArray: TodosFiltersArrType = ["all", "active", "completed"];
  const getMapFilters = () =>
    filtersArray.map((filter, index) => (
      <div
        key={index}
        className={`todo-filters__input-wrapper ${
          activeFilter === filter ? "todo-filters__input-wrapper--active" : ""
        }`}
      >
        <input
          type="radio"
          value={filter}
          id={filter}
          name="filterType"
          defaultChecked={filter === "all" ? true : false}
          onChange={handleFilterTodos}
        />
        <label
          htmlFor={filter}
          className={`todo-filters__label ${
            activeFilter === filter ? "todo-filters__label--active" : ""
          }`}
        >
          {upercaseFirst(filter)}
        </label>
      </div>
    ));
  return <form className="todo-filters">{getMapFilters()}</form>;
};

export default TodoFilters;
