import { useEffect, useState } from "react";

const workingCodes = [
    { code: 999999, minutes: 120 },
    { code: 421408, minutes: 60 },
    { code: 123456, minutes: 1 },
    { code: 111111, minutes: .25 }
];

const msInSeconds = (seconds) => seconds * 1000;
const msInMinutes = (minutes) => minutes * msInSeconds(60);
const msInHours = (hours) => hours * msInMinutes(60);

const formatTime = (ms) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
};

const Time = () => {
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(Date.now());
        }, msInSeconds(1));

        return () => clearInterval(intervalId);
    }, []);

    return currentTime;
};

const calculateRemainingTime = (minutes, currentTime, timestamp) => msInMinutes(minutes) - (currentTime - timestamp);

export { workingCodes, msInSeconds, msInMinutes, msInHours, formatTime, calculateRemainingTime, Time };
