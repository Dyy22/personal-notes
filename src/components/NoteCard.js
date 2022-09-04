import React from 'react';
import {showFormattedDate} from "../utils";

function NoteCard(props) {

    const handleDelete = () => {
        props.handleDelete(props.id)
    }

    const handleArchive = () => {
        props.handleArchive(props.id)
    }

    return (
        <div className="flex flex-col gap-1 border-2 rounded-xl ">
            <div className="p-5 h-full gap-2 flex-col flex">
                <h3 className="text-xl font-bold">{props.title}</h3>
                <p className="text-sm opacity-60">{showFormattedDate(props.createdAt)}</p>
                <p>{props.body}</p>
            </div>
            <div className="flex justify-between border-t-2">
                <button onClick={handleDelete} className="w-1/2 p-2 hover:text-red-500 border-r-2">Delete</button>
                <button onClick={handleArchive} className="w-1/2 p-2 hover:text-yellow-500 border-l-transparent border-l-2">
                    {props.type === "Active" ? "Archive" : "Active"}
                </button>
            </div>
        </div>
    );
}

export default NoteCard;