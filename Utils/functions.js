const axios = require('axios');

// In-memory cache (lightweight alternative to LRU for small-scale apps)
const funFactCache = new Map();

// Timeout helper for API calls
const fetchWithTimeout = async (url, timeout = 400) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await axios.get(url, { signal: controller.signal });
        clearTimeout(id);
        return response.data.text;
    } catch (error) {
        clearTimeout(id);
        console.error("Numbers API request failed:", error.message);
        return "No fact available at the moment.";
    }
};

// Number property functions
function checkEven(number) {
    return number % 2 === 0;
}

function checkOdd(number) {
    return number % 2 !== 0;
}

function checkprime(number) {
    if (number < 2) return false;
    if (number === 2 || number === 3) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number) + 1; i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

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

function isAmstrong(number) {
    const digits = number.toString();
    const numDigits = digits.length;
    const sum = [...digits].reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);
    return sum === number;
}

function digitSum(number) {
    return [...number.toString()].reduce((sum, digit) => sum + Number(digit), 0);
}

// Fetch Fun Fact with caching
async function funFact(number) {
    if (funFactCache.has(number)) {
        return funFactCache.get(number);
    }

    const fact = await fetchWithTimeout(`http://numbersapi.com/${number}/math?json`);
    funFactCache.set(number, fact);
    return fact;
}

module.exports = { funFact, digitSum, isAmstrong, checkperfect, checkprime, checkEven, checkOdd };
