import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PhoneBook from "./components/Phone_Book";
// import reportWebVitals from './reportWebVitals';

const notes = [
  {
    id: 1,
    full_name: "Karma Gurung",
    phone_no: "9809876559",
    date: "2022-1-17T17:30:31.098Z",
    // important: true,
  },
  {
    id: 2,
    full_name: "Dipesh Siwa",
    phone_no: "9854047593",
    date: "2022-1-17T18:39:34.091Z",
    // important: false,
  },
  {
    id: 3,
    full_name: "Pooja Rijal",
    phone_no: "984875946",
    date: "2022-1-17T19:20:14.298Z",
    // important: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PhoneBook notes={notes} />);
