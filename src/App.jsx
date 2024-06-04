import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function onAddNote() {
    const newNote = {
      id: 1,
      title: "新ノート",
      content: "新ノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  }

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
