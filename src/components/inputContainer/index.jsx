import React from "react";
import store from "../../redux/store.js";
import { taskAdded , taskEdited, taskRemoved } from "../../redux/actions.js";
import { useState } from "react";
import Check from "../../icons/check.jsx";
const InputCountainer =()=> {
    const [task, setTask] = useState({description:""}); 

    const submitHandler= (e) => {
        e.preventDefault();
        if (task.description.trim() === "") {
            console.log("Input is empty");
          } else {
            store.dispatch(taskAdded(task.description))
            setTask({ description: "" });

        }
        
        // console.log(store.getState());
        
        // store.dispatch(taskEdited("rtf5yugriogjrgjirg" , 1))
                
    }
    return(
        <form className="h-full w-full flex flex-row-reverse gap-2 mx-2 py-1 justify-center items-center"
        onSubmit={submitHandler}>
            <input 
                value={task.description} 
                onChange={(event) => {
                    setTask({description: event.target.value})
                        }}
                        className=' h-10 block w-full border border-slate-300 rounded-lg
                        px-3 focus:outline-none focus:border-slate-200 focus:ring-slate-200  '
                        type="text"
                        />
            <button type="submit" className="h-fit bg-gray-600 text-white rounded-full p-1  hover:scale-110 hover:bg-white hover:text-gray-700 duration-300">
                <Check hover={" hover:text-gray-800"}/>
            </button>
        </form>
    )
}
export default InputCountainer;