function formatTime(x) {
    let days = Math.floor(x / 1440);
    let hours = days % 24;
    let minutes = x % 60;
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)'
}
formatTime(1441);