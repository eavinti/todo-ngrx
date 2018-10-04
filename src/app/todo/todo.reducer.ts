import * as todoActions from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Comer');
const todo2 = new Todo('limpiar casa');
const todo3 = new Todo('Estudiar');

todo2.completed = true;

const initState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = initState, action: todoActions.actions) {
    switch (action.type) {
        case todoActions.ADD_TODO:
            const todo  =  new Todo(action.texto);
            return [ ...state, todo];

        case todoActions.TOGGLE_TODO:
            return state.map( todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completed: !todoEdit.completed
                    };
                } else {
                    return todoEdit;
                }
            } );

        case todoActions.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completed: action.completed
                };
            });

        case todoActions.EDIT_TODO:
            return state.map( todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        text: action.text
                    };
                } else {
                    return todoEdit;
                }
            } );

            case todoActions.DELETE_TODO:
                return state.filter( todoEdit => todoEdit.id !== action.id );

        default:
            return state;
    }
}

