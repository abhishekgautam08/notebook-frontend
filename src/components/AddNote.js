import { React, useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNotes] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-3">
        <h1>Add a Notes</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title..."
              onChange={onChange}
              id="title"
              name="title"
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              placeholder="Enter Description..."
              id="description"
              name="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              placeholder="Enter tag..."
              id="tag"
              name="tag"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
