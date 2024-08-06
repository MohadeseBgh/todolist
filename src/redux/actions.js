import * as actions from './actionType.js' 

export function taskAdded(description){
    return {
        type: actions.TASK_ADDED,
        payload:{
            description
        }
    }
}
export const taskRemoved =(id)=>(
    {
        type: actions.TASK_REMOVED,
        payload:{
            id
        }
    }
)

export const taskEdited =(description,id)=>(
    {
        type: actions.TASK_EDITED,
        payload:{
            description,
            id
        }
    }
)
export const taskChecked =(id)=>(
    {
        type: actions.TASK_CHECKED,
        payload:{
            id
        }
    }
)