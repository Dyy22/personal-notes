import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
    return (
        <header className="p-2 border-b-2">
            <nav className="container mx-auto flex justify-between">
                <h1 className="text-3xl font-bold p-2 text-white">Notes</h1>
                <div className="xl:w-1/4 p-2 flex items-center gap-3">
                    <FontAwesomeIcon icon={faSearch} color="white" size="1x"/>
                    <input type="text" name="search" id="search" className="text-white focus:outline-0 bg-transparent placeholder-white w-full h-full" placeholder="Search Note..." onChange={props.searchNote}/>
                </div>
            </nav>
        </header>
    );
}

export default Header;