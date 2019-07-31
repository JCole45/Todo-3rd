
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
    id: ''
})

export const checkOffTodo = (id) => ({
    type: 'CHECK_TODO',
    id: id
})

export const editTodo = (text, id) => ({
    type: 'EDIT_TODO',
    text: text,
    id: id
})

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id: id
})