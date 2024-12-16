import axios from "axios";
import { BASE_URL, TODO_URL } from "../../constans/BaseUrl";
export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${TODO_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (name: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/${TODO_URL}`, {
      todoName: name,
      isChecked: false,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${TODO_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  id: string,
  isChecked: boolean,
  name: string
) => {
  try {
    const response = await axios.put(`${BASE_URL}/${TODO_URL}/${id}`, {
      todoName: name,
      isChecked: isChecked,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
