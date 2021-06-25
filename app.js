const prompt = require("prompt-sync")();

function findfactorsOf(n) {
    let factors = [];
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            factors.push(i);
        } else {
            continue;
        };
    };

    return factors;

};

const userInput = parseInt(prompt("Enter a number: "));
console.log("The factors of " + userInput + " are " + findfactorsOf(userInput));