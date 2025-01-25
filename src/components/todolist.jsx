

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
          <div className="w-full h-[100vh] bg-slate-950 flex justify-center items-center">
              <div className="w-[800px] h-[750px] bg-slate-500 rounded-[15px] pt-[100px] flex flex-col   items-center">

                <p className="text-7xl text-center font-semibold  mb-[70px]"> My Todo-list</p>

                <div className="flex gap-3">
                    <input type="text" value={task} onKeyDown={enterKey} onChange={ handleChange} placeholder="Enter your task" className="p-5 rounded-[5px]  text-slate-500 bg-slate-900 w-[400px]"/>
                    <button onClick={addTask} className="py-3 px-6 bg-slate-400 text-2xl font-medium rounded-[10px]"> Add</button>

                </div>



                <ul className="flex flex-col gap-5 mt-[100px]">
                    {taskArray.map((tasks, index)=>
                          <li key={index} className="w-[600px] flex items-center justify-between bg-slate-700 p-4 rounded-[10px]"> 
                          <span className="w-[300px] text-3xl font-medium text-slate-300">{tasks}</span> 
                          <div className="flex items-center">
                                <button className="py-2 px-4 bg-black text-slate-300 mr-2  rounded-[10px] " onClick={()=>deleteTask(index)}> Delete </button> 
                                <button className="py-2 px-4 bg-blue-700 mr-2 rounded-[10px]" onClick={()=>moveTaskUp(index)}> up</button> 
                                <button className="py-2 px-4 bg-red-500 mr-2 rounded-[10px]" onClick={ ()=> moveTaskDown(index)}> down</button> 

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