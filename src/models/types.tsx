import React, { Dispatch } from "react";

export type TodoType = {
  title: string;
  isCompleted: boolean;
};

export type TodosListType = TodoType[];

export type ReactChangeEventType<T> = React.ChangeEvent<T>;

// start of types for todo reducer
export type TodosFiltersType = "all" | "active" | "completed";

export type TodosFiltersArrType = TodosFiltersType[]

export type TodosStateType = {
  todos: TodosListType;
};

export enum ActionType {
  ADD_TODO = "ADD",
  DELETE_COMPLETED = "DELETE_COMPLETED",
  TOGGLE_COMPLETED = "TOGGLE_COMPLETED",
}

export type TodosStringActionType = {
  type: ActionType;
  payload: string;
};

export type TodosObjectActionType = {
  type: ActionType;
  payload: TodoType;
};

export type EmptyPayloadActionType = {
  type: ActionType;
  payload: null;
};

export type TodoActionsType = TodosStringActionType | TodosObjectActionType | EmptyPayloadActionType;

export type TodosAppContextType = {
  state: TodosStateType;
  dispatch: Dispatch<TodoActionsType>;
};
// end of types for todo reducer