import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "../../redux/store.js";
import { taskChecked, taskEdited, taskRemoved } from "../../redux/actions.js";
import Delete from "../../icons/delete.jsx";
import Edit from "../../icons/edit.jsx";
import Check from "../../icons/check.jsx";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';

const Task =(props)=>{
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    let tasks = useSelector((state) => state.tasks);
    const [editt, seEditt] = useState(false); 
    const [task, setTask] = useState({description:""}); 

    useEffect( ()=>{
        console.log(tasks)
        // setTask({description:})
    }, [tasks])
    const handleDelete = (e) =>{
        e.preventDefault();

        store.dispatch(taskRemoved(props.id))
        console.log(store.getState());
    }
    const handleEdit = (e) =>{
        e.preventDefault();
        if (task.description.trim() === "") {
            console.log("Input is empty");
          } else {
            store.dispatch(taskEdited(task.description , props.id))
        }
        seEditt(false);
        console.log(task.description)

    }
    const buttonEdit = (e) =>{
        e.preventDefault();
        seEditt(true);
    }
    const handleCheck = (e) =>{
        // e.preventDefault();
        store.dispatch(taskChecked(props.id))

    }
    return(
        <div className="min-h-10 min-w-fit bg-indigo-200 rounded-lg flex flex-row px-1 text-wrap">
            
            <div className=" h-fit flex justify-center items-center bg-red-300 text-white rounded-full p-1 m-1 duration-200 hover:scale-110" onClick={handleDelete}>
               <Delete/>
            </div>
            <div className="h-fit flex justify-center items-center bg-blue-300 text-white rounded-full p-1 m-1 duration-200 hover:scale-110" onClick={buttonEdit}>
                <Edit/>
            </div>

            {!editt && 
                <div className="w-full h-full text-sm text-black flex items-center text-center overflow-wrap break-words">
                    {props.description}
            </div>}

            {editt && 
             <form className="h-full w-full flex flex-row-reverse  mx-2 py-1 justify-center items-center"
             onSubmit={handleEdit}>
                 <input 
                     onChange={(event) => {
                         setTask({description: event.target.value})
                             }}
                             className=' bg-indigo-300 block w-full rounded-r-md focus:rounded-md h-full focus:border-slate-400 focus:ring-slate-400 focus:ring-1
                             px-3 focus:outline-none text-black'
                             type="text"
                             defaultValue={props.description}
                             />
                 <button type="submit" className=" h-full text-black rounded-l-md p-1 bg-indigo-300" >
                     <Check/>
                 </button>
             </form>}
             {/* <Checkbox {...label} color="default" className="p-1" onChange={handleCheck}/> */}
            <div className="flex justify-center items-center p-1">
                <input value="test" type="checkbox" onChange={handleCheck} checked={props.checked} /> 
            </div>
        </div>
    )
}
export default Task;
