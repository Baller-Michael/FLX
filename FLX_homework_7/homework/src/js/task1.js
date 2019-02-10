var login = prompt('Input your login');
var time = new Date();
var hour = time.getHours();

if (login === '' || login === null) {
    alert('Canceled');
} else if (login.length < 4) {
    alert('I don`t know any users having name length less than 4 symbols');
} else if (login === 'User' || login === 'Admin') {
    var password = prompt('Input password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if ((login === 'User' && password === 'UserPass') || (login === 'Admin' && password === 'RootPass')) {
        (hour < 20) ? alert('Good day, dear ' + login + '!') : alert('Good evening, dear ' + login + '!');
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don`t know you');
}