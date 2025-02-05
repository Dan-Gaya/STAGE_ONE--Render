const {
    checkprime, checkperfect, isAmstrong, checkOdd, digitSum, checkEven, funFact
} = require('../Utils/functions');

const classify = async (req, res) => {
    const num = req.query.number;

     if (!/^-?\d+$/.test(num)) {
        return res.status(400).json({ 
            number: "alphabet",
            error:true
         });
    }
    const number = parseInt(num, 10);
    // Run synchronous operations first
    const check_prime = checkprime(number);
    const check_perfect = checkperfect(number);
    const check_odd = checkOdd(number);
    const check_even = checkEven(number);
    const sum_of_digits = digitSum(number);

    // Run async operations in parallel
    const [check_armstrong, fun_fact] = await Promise.all([
        isAmstrong(number),
        funFact(number)
    ]);

    // Construct response
    const properties = [];
    if (check_armstrong) properties.push("armstrong");
    if (check_odd) properties.push("odd");
    if (check_even) properties.push("even");

    return res.status(200).json({
        number,
        is_prime: check_prime,
        is_perfect: check_perfect,
        properties,
        digit_sum: sum_of_digits,
        fun_fact
    });
};


module.exports = { classify };
