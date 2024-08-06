import React from "react";
import {  useSelector } from "react-redux";
import Task from "../task";

const TaskList =(props)=>{
    let tasks = useSelector((state) => state.tasks);
    const filteredTasks = tasks.filter((task) => {
        if (props.chosen.all) return true; // Show all tasks
        if (props.chosen.checked && task.checked) return true; // Show checked tasks
        if (props.chosen.unchecked && !task.checked) return true; // Show unchecked tasks
        return false; // Default case (should not happen)
    });
    return(
        <div className="h-full w-full flex flex-col gap-1  ">
            {filteredTasks.map((task) => {return(
                
                <Task description={task.description} id={task.id} checked={task.checked}/>)
            })}
            
        </div>
    )
}
export default TaskList;