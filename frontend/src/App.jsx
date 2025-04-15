import axios from "axios";
import AddTaskForm from "./AddTaskForm";
import HomePage from "./HomePage";
import {Route, Routes} from 'react-router-dom';

axios.defaults.baseURL= 'http://localhost:3000'

function App() {
  
  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="/addNew" element={<AddTaskForm/>} />
    </Routes>
   
  );
}

export default App
