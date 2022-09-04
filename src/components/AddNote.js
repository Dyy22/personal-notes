import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import AddForm from "./AddForm";

function AddNote(props) {
    const [hidden, setHidden] = useState(true);

    return (
        <div>
            <FontAwesomeIcon className="fixed bottom-8 right-5 md:bottom-10 md:right-10 bg-choco-1 rounded-full text-5xl md:text-6xl cursor-pointer" icon={faPlusCircle} color="white" onClick={() => setHidden(false)}/>
            <AddForm hidden={hidden} setHidden={setHidden} addNote={props.addNote}/>
        </div>
    );
}

export default AddNote;