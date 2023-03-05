import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Notes.css';

const Notes = () => {
    const divRef = useRef(null);
    const [content, setContent] = useState('');
    const [items, setItems] = useState({ content: '' });

    const handleClick = () => {
        setItems({ content });
        localStorage.setItem('items', JSON.stringify({ content }));
    };

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items'));
        if (storedItems) {
            setItems(storedItems);
            setContent(storedItems.content);
        }
    }, []);

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
                            onInput={(e) => setContent(e.target.textContent)}
                        >
                            {content}
                        </div>
                    </div>
                </div>
            </motion.div>
            <button onClick={handleClick} className="my-2">
                Save
            </button>
        </>
    );
};

export default Notes;
