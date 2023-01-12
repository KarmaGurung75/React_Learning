import { useState } from "react";

const PhoneBook = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const noteToShow = notes;

  // Name Input Function
  const nameInput = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  // Phone number Input function
  const phoneInput = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  };

  // Add New contact data function
  const handleAdd = (event) => {
    event.preventDefault();

    const note = {
      id: notes.length + 1,
      full_name: newName,
      phone_no: newPhone,
      date: new Date().toString(),
    };
    if (newName !== "" && newPhone !== "") setNotes(notes.concat(note));
    setNewName("");
    setNewPhone("");
  };

  // Delete contact function
  const handleDelete = (id) => {
    window.confirm(`Do you want to delete this contact?`);
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Search filter

  return (
    <>
      <h1>Phone Book</h1>
      <form>
        <p>Search Contact</p>
        <input type="text"></input>
      </form>
      <h1>Add new contact</h1>
      <form>
        <p>Full Name:</p>
        <input value={newName} onChange={nameInput}></input>
        <p>Phone Number</p>
        <input value={newPhone} onChange={phoneInput}></input>
        <br></br>
        <br></br>
        <button onClick={handleAdd}>Add Contact</button>
      </form>
      <h1>Contact Details</h1>
      <ul>
        {noteToShow &&
          noteToShow.map((note) => (
            <li key={note.id}>
              <h2>{note.full_name}</h2>
              <h4>{note.phone_no}</h4>
              <p>{note.date}</p>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PhoneBook;
