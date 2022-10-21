import { React } from "react";
import Notes from "./Notes";
const Home = () => {
  return (
    <>
      <div className="container my-3">
        <h1>Add a Notes</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title..."
            />
          </div>
          <div className="form-text mb-3">
            <textarea rows="4" cols="100">
              Enter text here...
            </textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Notes />
    </>
  );
};

export default Home;
