import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditTodoAction, actions, DeleteTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  checkField: FormControl;
  textInput: FormControl;

  editing: boolean;

  @ViewChild('inputElement') inputElement: ElementRef;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkField.valueChanges.subscribe( () => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editTodo() {
    this.editing = true;
    setTimeout( () => {
      this.inputElement.nativeElement.select();
    }, 1);
  }

  stopEditing() {
    this.editing = false;
    console.log( 'stop editing' );
    if ( this.textInput.invalid) {
      return;
    }
    if ( this.textInput.value === this.todo.text ) {
      return;
    }
    const action = new EditTodoAction(this.todo.id, this.textInput.value);
    this.store.dispatch(action);
  }

  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
