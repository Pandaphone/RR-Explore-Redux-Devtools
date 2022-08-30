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
        removeTodo: (state) => {
            return { value: state.value - 1 }
        },
        clearToDos: () => {
            return { toDoItems: [] }
        }
    }
})

export const { addToDo, removeTodo, clearToDos } = todoSlice.actions

export default todoSlice.reducer