import NoteCard from "./NoteCard";

function Notes(props) {
    return (
        <div className="w-full flex flex-col gap-5">
            <div id="title">
                <h2 className="text-2xl font-bold">{props.name} Notes</h2>
            </div>
            {props.noteList.length === 0 ?
                <p className="text-xl opacity-80 text-center">No Notes</p> :
                <div id="content" className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {props.noteList.map(note => (
                        <NoteCard key={note.id} id={note.id} title={note.title} body={note.body}
                                  createdAt={note.createdAt} handleDelete={props.handleDelete}
                                  handleArchive={props.handleArchive} type={props.name}/>
                    ))}
                </div>
            }
        </div>
    );
}

export default Notes;