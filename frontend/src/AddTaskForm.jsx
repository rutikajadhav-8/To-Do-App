import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "./api/Todo";

export default function AddTaskForm(){
   
   const[taskName, setTaskName] = useState('');
   const[datetime, setDatetime] = useState(''); 

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try{
          await addTask({
         name:taskName,
         date:datetime,
         isCompleted: false
      });
      alert("Task Added Successfully!");
      navigate("/")
      } catch(error){
         console.error(error);
         alert("Failed to add task.");
      }
     
   };
   

    return(
      <div className="min-h-screen p-7">
         
         <div className="mt-8 py-8">
            <h1 className="text-5xl text-center font-semibold mt-7 py-7 ">Add New Task</h1>
         
            <form className="max-w-md mx-auto mt-7" onSubmit={handleSubmit}>

                <h2 className="text-xl ">Task:</h2>
                <input className="w-full border my-2 py-2 px-3 rounded-2xl"
                       type="text"
                       value={taskName}
                       placeholder="Enter your task here" 
                       onChange={e => setTaskName(e.target.value)}
                 />

                 <h2 className="text-xl mt-4">Date & Time:</h2>
                 <input className="w-full border my-2 py-2 px-3 rounded-2xl"
                       type="datetime-local"  
                       value={datetime}
                       onChange={e => setDatetime(e.target.value)}
                 />

                <button className="w-full border my-5 py-2 px-3 rounded-2xl bg-cyan-700 text-xl text-white" type="submit">Add</button>
            </form>
         </div>

      </div>  
    );
}