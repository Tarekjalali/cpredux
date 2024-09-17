import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

const ListTasks = () => {
    const tasks= useSelector(state=>state.tasks)
    const [filTask, setFilTask]=useState("all")

  return (
        <div>
          <div>
          <button onClick={()=>setFilTask("all")}>All</button>
          <button onClick={()=>setFilTask("done")}>Done</button>
          <button onClick={()=>setFilTask("not done")}>Not Done</button>
          </div>

          {
              tasks.length === 0 ? 
              <h1>No Tasks</h1> 
              : 
              <>
              {
                filTask== "all" ? tasks.map((el,i,t)=><TaskCard el={el}></TaskCard>)
                :
                filTask=="done"? tasks.filter((el,i,t)=>el.isDone==true).map((el,i,t)=><TaskCard el={el}></TaskCard>)
                :
                tasks.filter((el,i,t)=>el.isDone==false).map((el,i,t)=><TaskCard el={el}></TaskCard>)

              }
              </>

                
          }
    </div>
  )
}

export default ListTasks