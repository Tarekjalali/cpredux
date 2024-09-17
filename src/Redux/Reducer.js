import { ADDTASK, DELETETASK, HANDLEDONE } from "./ActionTypes"

const initialState= {
    tasks:[
        {title: "read books", id: Math.random(), isDone:false},
        {title: "buy food", id: Math.random(), isDone:false},
        {title: "play games", id: Math.random(), isDone:false},
    ]
}
const Reducer =(state=initialState,action)=>{

    switch (action.type) {
        case ADDTASK : return {...state,tasks:[...state.tasks, action.payload]}
        case HANDLEDONE : return {...state, tasks: state.tasks.map((el,i,t)=>el.id===action.payload?{...el, isDone:!el.isDone} : el)}
        case DELETETASK: return {...state, tasks: state.tasks.filter((el,i,t)=>el.id!==action.payload)}
        default: return state
   
    }

}


export default Reducer