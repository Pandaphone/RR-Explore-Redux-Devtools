import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, clearToDos } from './features/todoSlice'

function Todo() {

  function addAtodo(){

  }


  function setInput(){}

  return (
    <div>
    <form onSubmit={(e) => addAtodo(e)}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
    <ul>

    </ul>
    <button>Clear!</button>
    </div>
  )
}

export default Todo