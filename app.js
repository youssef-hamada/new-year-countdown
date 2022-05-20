const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');
const year = document.getElementById('year');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`january 01 ${currentYear + 1} 00:00:00`);

function updateCountDown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff/ 1000 / 60 / 60 / 24);
    const h = Math.floor(diff/ 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

    days.innerHTML = d < 10 ?'0' + d : d;
    hours.innerHTML = h < 10 ?'0' + h : h;
    minutes.innerHTML = m < 10 ?'0' + m : m;
    seconds.innerHTML = s < 10 ?'0' + s : s;
    year.innerHTML = currentYear + 1;

};


setInterval(updateCountDown, 1000 );