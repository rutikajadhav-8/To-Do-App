import axios from "axios";

const BASE_URL = "http://localhost:8080/api/todos";

export const getAllTask = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}

export const addTask = async (todo) => {
    const response = await axios.post(BASE_URL, todo, {
          headers: {
      "Content-Type": "application/json",
    },
    });
    return response.data;
}

export const deleteTask = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
}

export const updateTask = async () =>{
    const response = await axios.put(`${BASE_URL}/${id}`, updatedTodo);
    return response.data;
}

export const toggleCompletion = async () => {
    const response = await axios.patch(`${BASE_URL}/toggle/${id}`);
    return response.data;
}