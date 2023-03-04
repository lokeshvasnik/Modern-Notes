import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clock from '../../assets/clock.svg';
import './Accessbility.css';
const Accessbility = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const time = new Date().toLocaleTimeString().slice(0, -3);
        setTime(time);
    }, [time]);

    return (
        <motion.div
            className="box d-flex flex-column align-items-center"
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
            <button className="my-2">Theme</button>
            <button className="my-2">
                <img className="mx-2 clock" src={clock} alt="time" />
                {time}
            </button>
        </motion.div>
    );
};

export default Accessbility;
