

import { useState } from "react"


function Todolist (){

    const [taskArray , settaskArray] = useState([]);
    let [task, settask] = useState("");


    function handleChange (event) {
        settask(event.target.value);
    }

    function addTask (){

        if(task.trim() !=="") {
            settaskArray(t =>[ ...t, task]);
            settask("");

        }


    }
    function deleteTask (index) {
        const updatedArray = taskArray.filter((_, i) => i!==index);
        settaskArray(updatedArray);
    }

    function enterKey (event) {
        if (event.key === "Enter") {
            addTask();
        }


    }

    function moveTaskUp (index) {
        if(index>0){
        const updatedtask = [...taskArray];
        [updatedtask[index], updatedtask[index-1]] = [updatedtask[index-1],updatedtask[index]];
        settaskArray(updatedtask);
        }

    }
    function moveTaskDown  (index) {
        if(index<taskArray.length-1){
            const updatedtask = [...taskArray];
            [updatedtask[index], updatedtask[index+1]] = [updatedtask[index+1],updatedtask[index]];
            settaskArray(updatedtask);
            }


    }

    console.log(taskArray);
    


    return(
        <>
          <div className="w-[100vw] h-[100vh] bg-slate-950 flex justify-center items-center">
              <div className="w-[80vw] h-[95vh] bg-slate-500 rounded-[15px] pt-[100px] flex flex-col   items-center">

                <p className="sm:text-6xl  md:text-7xl lg:text-8xl text-5xl text-center font-semibold  md:mb-[70px] mb-[40px]"> My Todo-list</p>

                <div className="flex gap-3 flex-shrink ">
                    <input type="text" value={task} onKeyDown={enterKey} onChange={ handleChange} placeholder="Enter your task" className="md:p-5 p-2 rounded-[5px] flex-shrink text-slate-500 bg-slate-900 w-[40vw]"/>
                    <button onClick={addTask} className="py-3 px-6 bg-slate-400 text-2xl font-medium rounded-[10px]"> Add</button>

                </div>



                <ul className="flex flex-col gap-5 mt-[80px]">
                    {taskArray.map((tasks, index)=>
                          <li key={index} className="w-[60vw] max-w-[700px] flex items-center justify-between bg-slate-700 p-4 rounded-[10px]"> 
                          <span className="w-[30vw] sm:text-xl md:text-2xl lg:text-3xl text-base font-medium text-slate-300">{tasks}</span> 
                          <div className="flex items-center">
                                <button className="sm:py-2 sm:px-4 py-1.5 px-1.5 text-sm sm:text-base  bg-black text-slate-300 sm:mr-3 mr-2  rounded-[10px] " onClick={()=>deleteTask(index)}> Delete </button> 
                                <button className="sm:py-2 sm:px-4 py-1.5 px-1.5 text-sm sm:text-base bg-blue-700 sm:mr-3 mr-2 rounded-[10px]" onClick={()=>moveTaskUp(index)}> up</button> 
                                <button className="sm:py-2 sm:px-4 py-1.5 px-1.5 text-sm sm:text-base bg-red-500 sm:mr-3 mr-2 rounded-[10px]" onClick={ ()=> moveTaskDown(index)}> down</button> 

                          </div>

                      </li>
                    
                    )}
                 
                </ul>

              </div>



          </div>
        
        </>
    )

}
export default Todolist