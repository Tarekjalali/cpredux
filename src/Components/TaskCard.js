import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, handledone } from '../Redux/Actions'

const TaskCard = ({el}) => {

  const dispatch=useDispatch()
  return (
    <div>
    <h1>{el.title}</h1>
    <h2>{el.isDone ? "True " :"FALSE"}</h2>
    <button onClick={()=>dispatch(handledone(el.id))}>Done</button>
    <button onClick={()=>dispatch(deleteTask(el.id))}>Delete</button>
    </div>
  )
}

export default TaskCard