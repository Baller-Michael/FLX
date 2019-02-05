function checkInput(userInput) {
    return userInput === '' || isNaN(userInput);
}

function count(money, discount) {
    if (money < 0 || money > 99999 || discount < 0 || discount > 99 || checkInput(money) || checkInput(discount)) {
        alert('Invalid data');
    } else {
        var discountPrice = +((money * discount) / 100).toFixed(2);
        var saved = +(money - discountPrice).toFixed(2);
        alert('Price without discount: ' + money + '\n\rDiscount: ' + discount + '%' +
            '\n\rPrice with discount: ' + discountPrice + '\n\rSaved: ' + saved);
    }
}

var money = +prompt('Input price');
var discount = +prompt('Input discount');

count(money, discount);