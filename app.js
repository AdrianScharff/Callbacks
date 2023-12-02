// Variables
const btnsContainer = document.querySelector('.btns-container');

// Functions
const runCallback = (variable, callback) => {
    callback(variable);
};

const runTwoNumbersCallback = (number1, number2, callback) => {
    callback(number1, number2);
}

const minus = (string) => {
    console.log(string.toLowerCase())
}

const mayus = (string) => {
    console.log(string.toUpperCase());
}

const return2hours = (array) => {
    const arrayToReturn = [];
    array.forEach(num => {
        if (num > 120) {
            arrayToReturn.push(num);
        }
    });
    console.log(arrayToReturn);
}


// Event Listeners
btnsContainer.addEventListener('click', (e) => {
    // Ex. 1
    if (e.target.classList.contains('ex-1-btn')) {
        runCallback('Hallo', (item) => {
            console.log(item);
        });
    // Ex. 2
    } else if (e.target.classList.contains('ex-2-btn')) {
        runCallback(6, (item) => {
            console.log('The type of the item is: ' + typeof item);
            console.log('The item is: ' + item);
        })
    // Ex. 3
    } else if (e.target.classList.contains('ex-3-1-btn')) {
        runTwoNumbersCallback(3, 8, (a, b) => console.log(a + b));
    } else if (e.target.classList.contains('ex-3-2-btn')) {
        runTwoNumbersCallback(3, 8, (a, b) => console.log(a - b))
    } else if (e.target.classList.contains('ex-3-3-btn')) {
        runTwoNumbersCallback(3, 8, (a, b) => console.log(a * b))
    } else if (e.target.classList.contains('ex-3-4-btn')) {
        runTwoNumbersCallback(3, 8, (a, b) => console.log(a / b))
    }
    // Ex. 4
    else if (e.target.classList.contains('ex-4-1-btn')) {
        runCallback('KATAJavaScript', minus);
    } else if (e.target.classList.contains('ex-4-2-btn')) {
        runCallback('KATAJavaScript', mayus)
    } else if (e.target.classList.contains('ex-5-btn')) {
        runCallback([100, 90, 400, 130], return2hours);
    }
})