import { useState } from "react";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const noteToShow = showAll
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
      id: notes.length + 1,
      content: newNote,
      date: new Date().toString(),
      import: Math.random() < 0.5,
    };
    if (newNote !== "") setNotes(notes.concat(note));
    setNewNote("");
  };

  const handleDelete = (id) => {
    window.confirm(`Do you want to delete with ID?`);
    setNotes(notes.filter((note) => note.id !== id));
    // alert(id);
  };
  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Important" : "show All"}
      </button>

      <ul>
        {noteToShow.map((note) => (
          <li key={note.id}>
            <p>{note.content}</p>
            <p>{note.date}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
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
