import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../Redux/Actions'

const AddTask = () => {


  const handleAdd=()=>{
    if (title===""){
      alert("empty")
    }
    else{
      dispatch(addtask({title, isDone:false, id: Math.random()}))
      setTitle("")

    }
   
  }

  const [title,setTitle]=useState("")
  const dispatch = useDispatch()
  return (
    <div>
      <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
      <button onClick={()=>handleAdd()}>Add</button>
    </div>
  )
}

export default AddTask