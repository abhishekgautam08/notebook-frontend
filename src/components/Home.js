import { React } from "react";
import NoteState from "../context/notes/NoteState";
import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <NoteState>
      <Notes showAlert={showAlert} />
    </NoteState>
  );
};

export default Home;
