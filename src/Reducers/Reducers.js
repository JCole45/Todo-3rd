import {ADD_TODO, REMOVE_TODO, EDIT_TODO, CHECK_TODO} from '../Actions/ActionTypes'
import {combineReducers} from 'redux' 

let idIncrementNumber = 1

const Todos = (state=[], action) => {
    switch(action.type){
        case 'ADD_TODO':
         return [...state, {
             text: action.text,
             id: idIncrementNumber++,
             completed: false
         }]

        case 'REMOVE_TODO': 
        return state.filter(todo => todo.id !== action.id)

        case 'CHECK_TODO':
        return state.map(todo => todo.id ==action.id ? {...todo, completed: !todo.completed} : todo )

        case 'EDIT_TODO':
        return state.map(todo => todo.id==action.id ? {...todo, text: action.text}: todo)
         
        default: 
          return state
    }
}; console.log(Todos.state)

export default combineReducers ({
    Todos
})