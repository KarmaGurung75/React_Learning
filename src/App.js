import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => {
        console.log(response);
        setNotes(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const notesToShow = showAll
    ? notes
    : notes.filter((n) => n.important === true);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    // Create a new note
    const note = {
      content: newNote,
      date: new Date().toString(),
      import: Math.random() < 0.5,
    };
    if (newNote !== "") {
      axios
        .post("http://localhost:3001/notes", note)
        .then((response) => {
          console.log(response);
          setNotes(notes.concat(response.data));
          setNewNote("");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (id) => {
    window.confirm(`Do you really want to delete??????????????`);
    axios
      .delete(`http://localhost:3001/notes/${id}`)
      .then((response) => {
        console.log(response);
        setNotes(notes.filter((note) => note.id !== id));
      }, [])
      .catch((err) => console.log(err));
  };

  const label = notes.important ? "Remove from important" : "Make Important";
  const handleImportant = (id) => {
    window.confirm(`Do you want to ${label}?`);
  };

  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show important" : "show All"}
      </button>
      <ul>
        {notes &&
          notesToShow.map((note) => (
            <li key={note.id}>
              <p>{note.content}</p>
              <p>{note.date}</p>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
              <button onClick={() => handleImportant(note.id)}>{label}</button>
            </li>
          ))}
      </ul>
      <form>
        <input value={newNote} onChange={handleInputChange}></input>
        <button onClick={handleAdd}>add</button>
      </form>
    </>
  );
}
export default App;