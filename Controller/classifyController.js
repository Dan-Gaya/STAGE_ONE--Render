const { checkprime, checkperfect, isAmstrong, checkOdd, digitSum, checkEven, funFact } = require('../Utils/functions');

const classify = async (req, res) => {
    const num = req.query.number || 371;
    const number = parseInt(num);

    // Validate input: Check if 'number' is a valid integer
    if (isNaN(number)) {
        return res.status(400).json({
            number: "alphabet",
            error: true
        });
    }

    // Run calculations in parallel for better performance
    const results = await Promise.all([
        checkprime(number),
        checkperfect(number),
        isAmstrong(number),
        funFact(number)
    ]);

    // Get synchronous results immediately
    const check_odd = checkOdd(number);
    const check_even = checkEven(number);
    const sum_of_digits = digitSum(number);

    const properties = [];
    if (results[2]) properties.push("armstrong");
    if (check_odd) properties.push("odd");
    if (check_even) properties.push("even");

    return res.status(200).json({
        number,
        "is_prime": results[0],
        "is_perfect": results[1],
        "properties": properties,
        "digit_sum": sum_of_digits,
        "fun_fact": results[3]
    });
};

module.exports = classify;
