import './App.css';
import Header from "./components/Header";
import NotesSection from "./components/NotesSection";
import AddNote from "./components/AddNote";
import {useState} from "react";
import {getInitialData} from "./utils";

function App() {
    const [notes, setNotes] = useState(getInitialData);
    const [searchKeyword, setSearchKeyword] = useState("");

    const addNote = (note) => {
        const noteList = [...notes];

        noteList.push(note);
        setNotes(noteList);
    }

    const searchNote = (event) => {
        setSearchKeyword(event.target.value.toUpperCase());
    }

    return (
        <div className="relative">
            <Header searchNote={searchNote}/>
            <NotesSection notes={notes.filter(note => note.title.toUpperCase().includes(searchKeyword) || note.body.toUpperCase().includes(searchKeyword))} setNotes={setNotes}/>
            <AddNote addNote={addNote}/>
       </div>
    );
}

export default App;
