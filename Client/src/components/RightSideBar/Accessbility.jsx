import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clock from '../../assets/clock.svg';
const Accessbility = () => {
    const [time, setTime] = useState('');
    const [theme, setTheme] = useState([
        'linear-gradient(to right, #f27121, #e94057, #8a2387)',
        'linear-gradient(to right, #fbd3e9, #bb377d)',
        'linear-gradient(to right, #ff5f6d, #ffc371)',
        'linear-gradient(to right, #56ab2f, #a8e063)',
        'linear-gradient(to right, #000000, #434343)',
    ]);
    const [increment, setIncrement] = useState(0);
    // Background Changer Logic
    const themeChangeHandler = () => {
        setIncrement((prevIncrement) => (prevIncrement + 1) % theme.length);
    };

    // Changes in background
    useEffect(() => {
        document.body.style.background = theme[increment];
    }, [increment]);

    // Date
    useEffect(() => {
        const time = new Date().toLocaleTimeString().slice(0, -3);
        setTime(time);
    }, [time]);

    return (
        <motion.div
            className="box d-flex flex-column "
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
            <button className="my-2" onClick={themeChangeHandler}>
                Theme
            </button>
            <button className="my-2">
                <img className="mx-2 clock" src={clock} alt="time" />
                {time}
            </button>
        </motion.div>
    );
};

export default Accessbility;
