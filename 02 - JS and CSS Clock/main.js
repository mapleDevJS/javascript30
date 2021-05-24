const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setTime = (mode) => {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
};

const setHand = (hand, degrees) => {
    hand.style.transform = `rotate(${degrees}deg)`;
};

const setSeconds = (seconds) => {
    const secondsDegrees = (seconds / 60) * 360 + 90;
    setHand(secondHand, secondsDegrees);
};

const setMinutes = (minutes) => {
    const minutesDegrees = (minutes / 60) * 360 + 90;
    setHand(minHand, minutesDegrees);
};

const setHours = (hours) => {
    const hoursDegrees = (hours / 12) * 360 + 90;
    setHand(hourHand, hoursDegrees);
};

setInterval(setTime, 1000);
