import { React, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container my-3">
      <h1>Your Notes</h1>
      {notes.map((noteItems) => {
        return (
          <Noteitem
            title={noteItems.title}
            description={noteItems.description}
            tag={noteItems.tag}
          />
        );
      })}
    </div>
  );
};

export default Notes;
