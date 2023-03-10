import React from 'react';
import { motion } from 'framer-motion';
import dustbin from '../../assets/dustbin.svg';
const Controls = ({
    data,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
}) => {
    const addNewNote = () => {
        console.log('Added New Note');
    };

    return (
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                },
                scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            }}
        >
            {/* Add New Note */}
            <button onClick={onAddNote} className="my-2">
                Add New Note
            </button>

            {data.map((item) => (
                <div key={item.id}>
                    <button
                        className={`my-2 ${item.id === activeNote && 'active'}`}
                        key={item.id}
                        onClick={() => setActiveNote(item.id)}
                    >
                        {item.title}
                        <img
                            onClick={() => onDeleteNote(item.id)}
                            className="w-25 ml-5"
                            src={dustbin}
                            alt="delete"
                        />
                    </button>
                </div>
            ))}
        </motion.div>
    );
};

export default Controls;
