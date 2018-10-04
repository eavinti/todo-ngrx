# ToDo list con NgRx

TODO list usando Angular 6 y NgRx

## Crear proyecto
ng new todo


## Crear componentes

ng g c footer --spec=false -is
ng g c todo --spec=false -is
ng g c todo/todo-list --spec=false -is
ng g c todo/todo-item --spec=false -is
ng g c todo/todo-footer --spec=false -is
ng g c todo/todo-add --spec=false -is

## Añadir template en proyecto
    http://todomvc.com/
    html  https://github.com/Klerith/TODO-CSS-Template/blob/master/index.html
    css   https://github.com/Klerith/TODO-CSS-Template/blob/master/node_modules/todomvc-app-css/index.css

## Instalar NgRx
    https://github.com/ngrx/platform/blob/master/docs/store/README.md
    npm install @ngrx/store --save

## Instalar store-devtools
    https://github.com/ngrx/store-devtools
    npm install @ngrx/store-devtools@6.1.0 --save

## Setup  NgRx
    https://github.com/ngrx/platform/blob/master/docs/store/README.md

    import { StoreModule } from '@ngrx/store';
    StoreModule.forRoot({ count: counterReducer })