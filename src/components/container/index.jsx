import React from "react";
import InputCountainer from "../inputContainer";
import TaskList from "../taskList";
import { useState } from "react";
const Container =()=>{
    const [chosen, setChosen] = useState({checked: false, unchecked: false, all: true});

    return(
        <div className="h-screen w-screen bg-white flex justify-center items-center">
            <div className="flex items-center flex-col h-5/6 w-1/4 bg-gray-200 border border-gray-400 rounded-xl p-2 gap-2 drop-shadow-lg">
                <p className="h-1/12 w-full font-bold text-indigo-600 text-3xl ">
                    TO Do List
                </p>
                <div className="h-3/12 w-full flex justify-center items-center">
                    <InputCountainer/>
                </div>
                <div className=" w-full flex justify-between gap-3 m-1 px-2">
                    <button  
                        className={`bg-blue-200 flex-grow rounded-md border border-blue-300 text-violet-800 text-sm p-1 hover:scale-105 hover:bg-blue-300 hover:text-white duration-300
                             ${chosen.checked === true ? "bg-blue-300 text-white" : ""}`}
                             onClick={()=>{
                                setChosen({checked: true, unchecked: false, all: false});
                            }}
                             >
                        DONE
                    </button>
                    <button  
                        className={`bg-blue-200 flex-grow rounded-md border border-blue-300 text-violet-800 text-sm p-1 hover:scale-105 hover:bg-blue-300 hover:text-white duration-300
                             ${chosen.all === true ? "bg-blue-300 text-white" : ""}`}
                             onClick={()=>{
                                setChosen({checked: false, unchecked: false, all: true});
                            }}
                             >
                                  ALL
                    </button>
                    <button  
                        className={`bg-blue-200 flex-grow rounded-md border border-blue-300 text-violet-800 text-sm p-1 hover:scale-105 hover:bg-blue-300 hover:text-white duration-300
                             ${chosen.unchecked === true ? "bg-blue-300 text-white" : ""}`}
                             onClick={()=>{
                                setChosen({checked: false, unchecked: true, all: false});
                            }}
                             >
                                PROGRESS
                    </button>
                </div>
                <div className="bg-black w-full h-[0.5px]"></div>
                <div className="h-auto w-full flex justify-center items-center overflow-auto">
                    <TaskList chosen={chosen}/>
                </div>
            </div>
        </div>
    )
}
export default Container;