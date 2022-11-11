import { React, useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNotes] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNotes({ title: "", description: "", tag: "" });
    props.showAlert("added successfully", "success");
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
              value={note.title}
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
              value={note.description}
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
              value={note.tag}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={note.title.length < 3 || note.description.length < 5}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
