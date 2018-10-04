# ToDo list con NgRx

> TODO list usando Angular 6 y NgRx

* **DEMO:** - [github.eavinti.com](http://github.eavinti.com/)

## Crear proyecto
ng new todo


## Crear componentes

```sh
* ng g c footer --spec=false -is
* ng g c todo --spec=false -is
* ng g c todo/todo-list --spec=false -is
* ng g c todo/todo-item --spec=false -is
* ng g c todo/todo-footer --spec=false -is
* ng g c todo/todo-add --spec=false -is
```

## Añadir template en proyecto

    * [todomvc.com](http://todomvc.com/)
        * [index.html](https://github.com/tastejs/todomvc/blob/gh-pages/examples/vanillajs/index.html)
        * [index.css](https://github.com/tastejs/todomvc/blob/gh-pages/examples/vanillajs/node_modules/todomvc-app-css/index.css)
    * Respaldo:
        * [index.html](https://github.com/eavinti/todo-ngrx/blob/master/src/assets/index.html)
        * [index.css](https://github.com/eavinti/todo-ngrx/blob/master/src/assets/index.css)


## Instalar NgRx
   [NgRx](https://github.com/ngrx/platform/blob/master/docs/store/) 
    
   > npm install @ngrx/store --save

    
## Instalar store-devtools
    [store-devtools](https://github.com/ngrx/store-devtools)
    
    > npm install @ngrx/store-devtools@6.1.0 --save
    
    
## Setup  NgRx
    [ngrx README.md](https://github.com/ngrx/platform/blob/master/docs/store/README.md)
    
    
     import { StoreModule } from '@ngrx/store';
     
    @NgModule({
      imports: [
        BrowserModule,
        StoreModule.provideStore({ todos: todoReducer })
      ]
    })   
    
    
## Setup  store-devtools
    [store-devtools README.md](https://github.com/ngrx/store-devtools/blob/master/README.md)
     
    
    import {StoreDevtoolsModule} from '@ngrx/store-devtools';
     
    @NgModule({
      imports: [
        StoreModule.provideStore(rootReducer),
        // Note that you must instrument after importing StoreModule
        StoreDevtoolsModule.instrumentStore({
          maxAge: 25
        })
      ]
    })   
     
    
    
    
