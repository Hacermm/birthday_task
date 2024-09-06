let targetDate = new Date("2024-11-15 00:00:00");

setInterval(function() {

    let now = new Date();
    let timeDifference = targetDate - now;


    let secondsLeft = Math.floor(timeDifference / 1000) % 60;
    let minutesLeft = Math.floor(timeDifference / (1000 * 60)) % 60;
    let hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    let daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));



    console.clear();
    console.log(`Day:${daysLeft}, Hour:${hoursLeft}, Minute:${minutesLeft}, Second:${secondsLeft}`);
}, 1000);

