import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToDo, removeTodo, clearToDos } from './features/todoSlice'

function Todo() {

  const listItems = useSelector((state) => state.todo.toDoItems)
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  function addAtodo(e){
    e.preventDefault()
    dispatch(addToDo(input))
  }

  const renderList = listItems.map((item, index) => <li key={index}>{item}</li>)

  return (
    <div>
    <form onSubmit={(e) => addAtodo(e)}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
    <ul>
    {renderList}
    </ul>
    <button>Clear!</button>
    </div>
  )
}

export default Todo