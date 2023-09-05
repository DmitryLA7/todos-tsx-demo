import {
  ActionType,
  TodoActionsType,
  TodosStateType,
} from "../../models/types";
import { todosReducer } from "./TodosProvider";

describe("todosReducer", () => {
  test("return new state for ADD_TODO type", () => {
    const testState: TodosStateType = { todos: [] };
    const addAction: TodoActionsType = {
      type: ActionType.ADD_TODO,
      payload: "new todo",
    };
    const updateState = todosReducer(testState, addAction);
    expect(updateState).toEqual({
      todos: [{ title: "new todo", isCompleted: false }],
    });
  });
  test("return new state for DELETE_COMPLETED type", () => {
    const testState: TodosStateType = {
      todos: [
        { title: "task1", isCompleted: false },
        { title: "task2", isCompleted: true },
      ],
    };
    const addAction: TodoActionsType = {
      type: ActionType.DELETE_COMPLETED,
      payload: null,
    };
    const updateState = todosReducer(testState, addAction);
    expect(updateState).toEqual({
      todos: [{ title: "task1", isCompleted: false }],
    });
  });
  test("return new state for TOGGLE_COMPLETED type", () => {
    const targetTask = { title: "task1", isCompleted: false };
    const testState: TodosStateType = {
      todos: [targetTask],
    };
    const addAction: TodoActionsType = {
      type: ActionType.TOGGLE_COMPLETED,
      payload: targetTask,
    };
    const updateState = todosReducer(testState, addAction);
    expect(updateState).toEqual({
      todos: [{ ...targetTask, isCompleted: true }],
    });
  });
});
