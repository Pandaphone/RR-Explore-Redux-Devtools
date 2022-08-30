import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toDoItems: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            return { toDoItems: [...state.toDoItems, action.payload]
        }},
        removeTodo: (state, action) => {
            let list = [...state.toDoItems]
            let listItem = action.payload
            if (listItem !== -1){
                list.splice(listItem, 1)
                return{ toDoItems: list}
            }
        },
        clearToDos: () => {
            return { toDoItems: [] }
        }
    }
})

export const { addToDo, removeTodo, clearToDos } = todoSlice.actions

export default todoSlice.reducer