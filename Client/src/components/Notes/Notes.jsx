import React from 'react';
import { motion } from 'framer-motion';
// import { collection, addDoc, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';
import './Notes.css';

const Notes = ({ activeNote, data, onUpdateNote }) => {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
        });
    };

    // 1. if the button clicked id is matching the id which is present inside the notes array then only we will be shoiwng the value of the notes on the input field

    if (!activeNote) {
        return <div>Write Something</div>;
    }

    const { body } = activeNote;

    return (
        <>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <div id="paper">
                    <div id="pattern">
                        <textarea
                            id="content"
                            onChange={(e) =>
                                onEditField('body', e.target.value)
                            }
                            value={body}
                        ></textarea>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Notes;
