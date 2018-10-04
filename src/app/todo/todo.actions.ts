
import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] add todo';
export const TOGGLE_TODO = '[TODO] toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] toggle all todo';
export const EDIT_TODO = '[TODO] edit todo';
export const DELETE_TODO = '[TODO] delete todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completed: boolean) {}
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) {}
}

export type actions = AddTodoAction |
                      ToggleTodoAction |
                      EditTodoAction |
                      DeleteTodoAction |
                      ToggleAllTodoAction;


