import axios from "axios";
import Note from "../components/Note";

const baseUrl = "http://localhost:3001/notes";

const getAllNotes = () => {
  return axios.get(baseUrl);
};

const createNote = (newNote) => {
  return axios.post(baseUrl, newNote);
};

const deleteNote = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
const updateNote = (id, changeNote) => {
  return axios.put(`${baseUrl}/${id}`, changeNote);
};

export default {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
};
