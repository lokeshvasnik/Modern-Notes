import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Notes.css';

const Notes = () => {
    const divRef = useRef(null);
    const [content, setContent] = useState('');
    const [toast, setToast] = useState('');

    useEffect(() => {
        const storedContent = localStorage.getItem('content');
        if (storedContent) {
            setContent(storedContent);
            divRef.current.textContent = storedContent;
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newContent = divRef.current.textContent;
            localStorage.setItem('content', newContent);
            setToast('Saved To Db');
        }, 20000);
        return () => clearInterval(intervalId);
    }, []);

    const handleContentChange = (e) => {
        if (content === '') {
            return;
        }
        setContent(e.target.textContent);
    };

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
                        <div
                            ref={divRef}
                            id="content"
                            contentEditable="true"
                            onInput={handleContentChange}
                        ></div>
                    </div>
                </div>
            </motion.div>
            <button className="my-2">{toast}</button>
        </>
    );
};

export default Notes;
