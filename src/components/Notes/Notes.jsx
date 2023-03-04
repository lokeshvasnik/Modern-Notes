import React from 'react';
import { motion } from 'framer-motion';
import './Notes.css';

const Notes = () => {
    return (
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
                    <div id="content" contentEditable="true"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default Notes;
