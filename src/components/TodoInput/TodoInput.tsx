import { ReactChangeEventType } from "../../models/types";
import "./style.scss";

interface ITodoInputProps {
  value: string;
  onChange: (arg: ReactChangeEventType<HTMLInputElement>) => void;
}

const TodoInput = ({ value, onChange }: ITodoInputProps) => {
  return (
    <div className="todo-input">
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default TodoInput;
