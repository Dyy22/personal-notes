import React from 'react';
import Notes from "./Notes";

function NotesSection(props) {
    const activeNotes = props.notes.filter(note => !note.archived);
    const archiveNotes = props.notes.filter(note => note.archived);

    const deleteNote = (id) => {
        props.setNotes(props.notes.filter(note => note.id !== id))
    }

    const archiveNote = (id) => {
        const notes = [...props.notes];
        const index = notes.findIndex(note => note.id === id);
        const splice = notes.splice(index, 1)[0];

        splice.archived = !splice.archived;
        notes.push(splice);
        props.setNotes(notes);
    }

    return (
        <section className="container flex flex-col items-center p-5 mx-auto text-white gap-10">
            <Notes name="Active" noteList={activeNotes} handleDelete={deleteNote} handleArchive={archiveNote}/>
            <Notes name="Archive" noteList={archiveNotes} handleDelete={deleteNote} handleArchive={archiveNote}/>
        </section>
    );
}

export default NotesSection;