import { ColoredClock } from './coloredClock.js';
import { Clock } from './clock.js';


const clock = new Clock({
    element: document.querySelector('.clock'),
});

clock.clockStart();

const coloredClock = new ColoredClock({
    element: document.querySelector('.coloredClock'),
    color: 'white',
});

coloredClock.clockStart();