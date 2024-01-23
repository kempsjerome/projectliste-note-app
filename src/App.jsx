import React, { useState } from "react";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";


function App() {

  // la funtion qui ajout
  const [listNotes, setListeNotes] = useState([])

  // addnote va a la allform en passan pa home page
  const addNote = (title, message,category) => {
    const id = crypto.randomUUID();

    const newNote = { title, message, category, id }
    setListeNotes([...listNotes, newNote])
    console.log(listNotes)

  }

  const removeNote = (id) =>{
    const listFiltered = listNotes.filter((note) =>{
      if( note.id !== id){
        return note
      }

    })

    setListeNotes(listFiltered)
  }

  return (
    <>
      <HomePage listNotes={listNotes} addNote={addNote} removeNote ={removeNote} />

    </>
  );
}

export default App;
