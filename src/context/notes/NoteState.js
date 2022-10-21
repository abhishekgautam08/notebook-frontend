import { React, useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesIntials = [
    {
      _id: "6350a6338558b2b4bc8a3989",
      user: "635082a93332dc35c3d7f72a",
      title: "abhsihek",
      description: "i m good",
      tag: "personal",
      date: "2022-10-20T01:36:51.063Z",
      __v: 0,
    },

    {
      _id: "6350a6378558b2b43997",
      user: "635082a93332dc35c3d7f72a",
      title: "abhi",
      description: "i m bad",
      tag: "home",
      date: "2022-10-20T01:36:55.080Z",
      __v: 0,
    },
    {
      _id: "6350a6378558b2b4bc8997",
      user: "635082a93332dc35c3d7f72a",
      title: "abhi",
      description: "i m bad",
      tag: "home",
      date: "2022-10-20T01:36:55.080Z",
      __v: 0,
    },
    {
      _id: "6350a6378558b2b4bc8a397",
      user: "635082a93332dc35c3d7f72a",
      title: "abhi",
      description: "i m bad",
      tag: "home",
      date: "2022-10-20T01:36:55.080Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesIntials);

  //Add note
  const addNote = (title, description, tag) => {
    const note = null;
    setNotes(notes.push.apply(note));
  };
  //Delete note
  const deleteNote = () => {};

  //Edit Note
  const editNote = () => {};

  return (
    <>
      <NoteContext.Provider
        value={{ notes, setNotes, addNote, deleteNote, editNote }}
      >
        {props.children}
      </NoteContext.Provider>
      ;
    </>
  );
};

export default NoteState;
