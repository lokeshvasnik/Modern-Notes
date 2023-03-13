import React, { useState, useEffect } from 'react';
import Notes from './components/Notes/Notes';
import Accessbility from './components/RightSideBar/Accessbility';
import Controls from './components/LeftSideBar/Controls';
import uuid from 'react-uuid';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);

    // Adding a note
    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            body: '',
        };

        setNotes([newNote, ...notes]);
    };

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('items'));
        if (storedNotes) {
            setNotes(storedNotes);
        }
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => {
            localStorage.setItem('items', JSON.stringify(notes));
        }, 3000);

        return () => clearInterval(timerId);
    }, [notes]);

    // Deleting the note
    const onDeleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    // Helper function
    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
        // if the id is matched then this functions is called
    };

    // On edit of input field functions
    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNote) {
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotesArray);
    };

    return (
        <>
            <div className="container-fluid  my-5">
                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <Controls
                            onDeleteNote={onDeleteNote}
                            data={notes}
                            onAddNote={onAddNote}
                            activeNote={activeNote}
                            setActiveNote={setActiveNote}
                        />
                    </div>
                    <div className="col p-0">
                        <Notes
                            activeNote={getActiveNote()}
                            onUpdateNote={onUpdateNote}
                            data={notes}
                        />
                    </div>
                    <div className="col d-flex flex-column align-items-center ">
                        <Accessbility />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
