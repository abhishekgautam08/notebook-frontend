import { React, useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesIntials = [];

  const [notes, setNotes] = useState(notesIntials);

  //Get all note
  const getNotes = async () => {
    try {
      //API CALL
      const response = await fetch(`${host}/api/notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.log(error);
      setNotes(notesIntials);
    }
  };

  //Add note
  const addNote = async (title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Delete note
  const deleteNote = async (id) => {
    // API CALL
    await fetch(`${host}/api/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    await fetch(`${host}/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const newNotes = [...notes];

    const newNote = newNotes.find((note) => note._id === id);
    if (newNote) {
      newNote.title = title;
      newNote.description = description;
      newNote.tag = tag;
    }

    // let newNotes = JSON.parse(JSON.stringify(notes));
    //logic for client
    // for (let index = 0; index < newNotes.length; index++) {
    //   const element = newNotes[index];
    //   if (element._id === id) {
    //     newNotes[index].title = title;
    //     newNotes[index].description = description;
    //     newNotes[index].tag = tag;
    //     break;
    //   }
    // }
    setNotes(newNotes);
  };

  return (
    <>
      <NoteContext.Provider
        value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
      >
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteState;
