function pipe() {
    let sum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function addOne(x) {
    return x + 1;
}

pipe(4, addOne(1));