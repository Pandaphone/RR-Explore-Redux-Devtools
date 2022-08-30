import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToDo, removeTodo, clearToDos } from './features/todoSlice'

function Todo() {

  const listItems = useSelector((state) => state.todo.toDoItems)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')


  const renderList = listItems.map((item, index) => <li key={index} onClick={() => dispatch(removeTodo(index))}>{item}</li>)

  const addAtodo = (e) => {
    e.preventDefault()
    dispatch(addToDo(input))
  }

  

  return (
    <div>
    <form onSubmit={(e) => addAtodo(e)}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
    <ul>
    {renderList}
    </ul>
    <button onClick={() => dispatch(clearToDos())}>Clear!</button>
    </div>
  )
}

export default Todo