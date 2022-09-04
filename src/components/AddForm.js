import React, {useState} from 'react';

function AddForm(props) {
    const [note, setNote] = useState({
        id: new Date().getTime(),
        title: "",
        body: "",
        archived: false,
        createdAt: new Date()
    });

    const clearNote = () => {
        const blankNote = {
            id: new Date().getTime(),
            title: "",
            body: "",
            archived: false,
            createdAt: new Date()
        }
        setNote(blankNote)
    }

    const handleCancel = (event) => {
        event.preventDefault();
        props.setHidden(true);
        clearNote()
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.addNote(note);
        clearNote()
        props.setHidden(true);
    }

    const handleTitle = (event) => {
        if (event.target.value.length > 50) return;
        const newNote = {
            ...note,
            title: event.target.value
        }

        setNote(newNote);
    }

    const handleBody = (event) => {
        const newNote = {
            ...note,
            body: event.target.value,
        }

        setNote(newNote);
    }

    const hidden = props.hidden && "hidden";
    return (
        <div className={"fixed top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 " + hidden}>
            <div className="text-white border-2 rounded-xl bg-choco-1 p-8 flex flex-col gap-10 w-full md:w-3/4 h-full items-center">
                <h2 className="text-2xl">Add New Note</h2>
                <form className="w-full h-full flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label className="text-right" htmlFor="note-title">Characters Left: {50 - note.title.length}</label>
                        <input id="note-title" type="text" placeholder="Input Title..." className="p-3 rounded-xl bg-transparent border-2 placeholder-white focus:outline-0 w-full" onChange={handleTitle} value={note.title} required={!props.hidden}/>
                    </div>
                    <textarea className="bg-transparent border-2 rounded-xl w-full h-full focus:outline-0 p-3 placeholder-white" placeholder="Input Your Note..." onChange={handleBody} value={note.body} required={!props.hidden}></textarea>
                    <input type="submit" value="Create Note" className="border-2 rounded-xl p-3 cursor-pointer hover:bg-white hover:text-choco-1"/>
                    <button className="border-2 rounded-xl p-3 cursor-pointer hover:bg-white hover:text-choco-1" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddForm;