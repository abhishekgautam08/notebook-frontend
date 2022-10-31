import { React, useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesIntials = [];

  const [notes, setNotes] = useState(notesIntials);

  //Get all note
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MDgyYTkzMzMyZGMzNWMzZDdmNzJhIn0sImlhdCI6MTY2NjIyNDk1Mn0.JDXeRgMGmQT3t8fGTvf3h5yObwdSWiRpQW_7paipqmQ",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add note
  const addNote = async (title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MDgyYTkzMzMyZGMzNWMzZDdmNzJhIn0sImlhdCI6MTY2NjIyNDk1Mn0.JDXeRgMGmQT3t8fGTvf3h5yObwdSWiRpQW_7paipqmQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Delete note
  const deleteNote = async (id) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MDgyYTkzMzMyZGMzNWMzZDdmNzJhIn0sImlhdCI6MTY2NjIyNDk1Mn0.JDXeRgMGmQT3t8fGTvf3h5yObwdSWiRpQW_7paipqmQ",
      },
    });
    const json = response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MDgyYTkzMzMyZGMzNWMzZDdmNzJhIn0sImlhdCI6MTY2NjIyNDk1Mn0.JDXeRgMGmQT3t8fGTvf3h5yObwdSWiRpQW_7paipqmQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json;

    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic for client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <>
      <NoteContext.Provider
        value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
      >
        {props.children}
      </NoteContext.Provider>
      ;
    </>
  );
};

export default NoteState;
