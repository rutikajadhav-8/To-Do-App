import axios from "axios";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { deleteTask, getAllTask, toggleCompletion } from "./api/Todo";

export default function HomePage(){

    const [tasks, setTasks] = useState([]);
    
   useEffect(() => {
     fetchTask();
   }, []);

   const fetchTask = async () => {
    try{
        const data = await getAllTask();
        setTasks(data);
    } catch(error) {
        console.error(error);
    }
   };

   const handleDelete = async (id) => {
      await deleteTask(id);
      fetchTask();
   }

   const handleToggle = async(id) => {
    // await toggleCompletion(id);
    // fetchTask();

       setTasks(prev =>
       prev.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
           )
        );
       toggleCompletion(id);
   }

    return(

        <div className="min-h-screen p-7 bg-gray-200 ">

            <header className="text-center font-bold text-white text-5xl py-10 bg-gradient-to-r from-green-500 to-blue-800  rounded-2xl">
                TODO APP
            </header>

            <Link to={'/addNew'} className="flex gap-1 text-white text-2xl p-3 bg-cyan-700 rounded-xl mt-10 mx-15 w-50 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                   </svg>
                   Add Task
            </Link>
            
            <div className="border-t-1 mt-6 border-gray-300 px-15 mx-12">

                {tasks.length > 0 && tasks.map((task) => (

                  <div key={task.id} className="flex justify-between bg-white mt-8 mx-15 p-3 rounded-2xl">
                     <div className=" flex gap-5 text-2xl">
                           <input type="checkbox"
                                  checked={task.isCompleted}  
                                  onChange={() => handleToggle(task.id)}    
                           />
                           <div className={` ${task.isCompleted ? 'line-through text-gray-400' : '' }`}>                            
                                   <p>
                                      {task.name}
                                   </p>

                                   <p className="text-sm text-gray-400"> 
                                      {task.date}
                                   </p>
                              
                           </div>
                              
                     </div> 

                     <div className="flex gap-8">
                         <button onClick={() => handleDelete(task.id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mr-2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                             </svg>
                         </button>
                      </div>

                   </div>
                ))}       

            </div>
        
        </div>
    );
}