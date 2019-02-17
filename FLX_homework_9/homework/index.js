const data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

function findTypes() {
    let types = [];
    for (let i = 0; i < arguments.length; i++) {
        types[i] = typeof arguments[i];
    }
    return types;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, func) {
    let newArray = [];
    executeforEach(arr, function (el) {
        newArray.push(func(el));
    });
    return newArray;
}

function filterArray(arr, func) {
    let newArray = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}

function getAmountOfAdultPeople(data) {
    let counter = 0;
    filterArray(data, function (user) {
        if (user.age > 18) {
            counter++;
        }
    });
    return counter;
}

function getGreenAdultBananaLovers(data) {
    let namesArray = [];
    filterArray(data, function (user) {
        if (user.age > 18 && user.favoriteFruit === 'banana' && user.eyeColor === 'green') {
            namesArray.push(user);
        }
    });
    return mapArray(namesArray, function (user) {
        return user.name;
    })
}

function keys(data) {
    let keyArray = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            keyArray.push(key);
        }
    }
    return keyArray;
}

function values(data) {
    let valuesArray = [];
    for (var values in data) {
        if (data.hasOwnProperty(values)) {
            valuesArray.push(data[values]);
        }
    }
    return valuesArray;
}

function showFormattedDate(data) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `Date: ${data.getDate()} of ${months[data.getMonth()]}, ${data.getFullYear()}`;
}

function isEvenYear(data) {
    return (data.getFullYear() % 2 === 0);
}

function isEvenMonth(data) {
    return (data.getMonth() % 2 !== 0);
}

console.log(findTypes(null, 5, 'hello'));

console.log(executeforEach([1, 2, 3], function (el) {
    console.log(el)
}));

console.log(mapArray([2, 5, 8], function (el) {
    return el + 3
}));

console.log(filterArray([2, 5, 8], function (el) {
    return el > 3
}));

console.log(getAmountOfAdultPeople(data));

console.log(getGreenAdultBananaLovers(data));

console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

console.log(values({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

console.log(isEvenYear(new Date('2019-01-27T01:10:00')));

console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));