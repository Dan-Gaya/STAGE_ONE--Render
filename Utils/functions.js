const axios = require('axios');

function checkEven(number) {
    return number % 2 === 0;
}

function checkOdd(number) {
    return number % 2 !== 0;
}

// Optimized Prime Check
function checkprime(number) {
    if (number < 2) return false;
    if (number === 2 || number === 3) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number) + 1; i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

// Optimized Perfect Number Check
function checkperfect(number) {
    if (number < 2) return false;
    
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i + (i !== number / i ? number / i : 0);
        }
    }
    
    return sum === number;
}

// Optimized Armstrong Number Check
function isAmstrong(number) {
    const digits = number.toString();
    const numDigits = digits.length;
    const sum = [...digits].reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);

    return sum === number;
}

// Optimized Digit Sum
function digitSum(number) {
    let sum = 0;
    while (number !== 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Caching for Number Fun Fact
const cache = new Map();

async function funFact(number) {
    if (cache.has(number)) {
        return cache.get(number);
    }

    try {
        const { data } = await axios.get(`http://numbersapi.com/${number}/math?json`);
        cache.set(number, data.text);
        return data.text;
    } catch (error) {
        console.error("Error fetching number fact:", error);
        return "Could not retrieve fact";
    }
}

module.exports = { funFact, digitSum, isAmstrong, checkperfect, checkprime, checkEven, checkOdd };
