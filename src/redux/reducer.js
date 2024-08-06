import * as actions from './actionType.js' 
const initialState = {
    tasks: [],
  };
let lastId=0;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.TASK_ADDED:
            return {
                ...state,
                tasks: [
                    ...state.tasks, 
                    {
                        id: lastId++,
                        description: action.payload.description,
                        checked: false
                    },
                ],
            };
            case actions.TASK_REMOVED:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id),
            };


            case actions.TASK_EDITED:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, description: action.payload.description }
                        : task
                ),
            };
            case actions.TASK_CHECKED:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, checked: !task.checked }
                        : task
                ),
            };
        default:
            return state;
    }
}