import { useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Note";

import noteService from "./services/noteService";

function App() {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);

  // useState -> Why are we using it?
  // to change a react component to stateful

  // why we need states in react component
  // what does the states do?
  // what is state?

  // useEffect
  // a hook defined in react
  // why we use it?
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/notes")
  //     .then((response) => {
  //       console.log(response);
  //       setNotes(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // here [] is dependency that does the work of
  // calling the useEffect for how many times
  // [] here is empty means it will be called only once

  const getNotes = () => {
    noteService
      .getAllNotes()
      .then((response) => {
        console.log(response);
        setNotes(response.data);
      })
      .catch((err) => console.log(err));
  };

  // const getNotes = async () => {
  //   try {
  //     let response = await axios.get("http://localhost:3001/notes")
  //     console.log(response)
  //     setNotes(response.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  useEffect(getNotes, []);

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    // Create a note
    const note = {
      // id: notes.length + 1,
      content: newNote,
      date: new Date().toString(),
      important: Math.random() < 0.5,
    };
    if (newNote !== "") {
      noteService
        .createNote(note)
        .then((response) => {
          console.log(response);
          setNotes(notes.concat(response.data));
          setNewNote("");
        })
        .catch((err) => console.log(err));
    }
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((n) => n.important === true);

  const handleDelete = (id) => {
    // alert(id)
    window.confirm(`Do you really want to delete note with id ${id}`);
    noteService
      .deleteNote(id)
      // here already the item is deleted but to show the change in the page
      // without refreshing the page
      // use the setNotes here to show/reflect changes
      .then((response) => {
        setNotes(notes.filter((n) => n.id !== id));
      }, [])
      .catch((err) => console.log(err));
    // setNotes(notes.filter((n) => n.id !== id));
  };

  const handleImportance = (id) => {
    window.alert(`Do you really want to update note with id ${id}`);
    let targetNote = notes.find((n) => n.id === id);
    targetNote = { ...targetNote, important: !targetNote.important };
    noteService
      .updateNote(id, targetNote)
      .then((response) => {
        console.log(response);
        setNotes(notes.map((n) => (n.id === id ? response.data : n)));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "show important" : "Show all"}
      </button>

      {/* <button onClick={() => setImp()}>Toggle Imp</button> */}
      <ul>
        {notesToShow.map((note) => (
          // <li key={note.id}>
          //   <p>{note.content}</p>
          //   <p>{note.date}</p>
          //   <button onClick={() => handleDelete(note.id)}>Delete</button>
          // </li>

          // <li key={note.id}>
          //   <Note note = {note} handleDelete={handleDelete}/>
          // </li>

          <Note
            key={note.id}
            note={note}
            handleDelete={handleDelete}
            handleImportance={() => handleImportance(note.id)}
          />
        ))}
      </ul>
      <form>
        <input value={newNote} onChange={handleInputChange} />
        <button onClick={handleAdd}>Add</button>
      </form>
    </>
  );
}

export default App;

// npm install json-server --save-dev
//    -> for dummy backend api for frontend developers
// to start the server
// json-server -p3001 --watch db.json
