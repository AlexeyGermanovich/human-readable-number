module.exports = function toReadable (number) {

    let result = "";

    if (!number) {
        return "zero"
    }

    if (getHundreds(number)) {
        result += getHundreds(number) + " ";
    }

    if (getDecades(number)) {
        result += getDecades(number) + " ";
    }
    
    if (getOnes(number)) {
        result += getOnes(number);
    }

    return result.trim()
}

const dataNum = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
}

function getHundreds(number) {
    if (number < 100) {
        return "";
    }
    let hundredValue = Math.floor(number / 100);
    return `${dataNum[hundredValue]} hundred`
}

function getDecades(number) {
    if ((number % 100) < 20) {
        return "";
    }
    let decadeValue = Math.floor((number % 100) / 10) * 10;
    return `${dataNum[decadeValue]}`
}

function getOnes(number) {
    let oneValue;
    if ((number % 100) >= 20) {
        oneValue = number % 100 % 10;
        return `${dataNum[oneValue]}`
    }
    else if ((number % 100) < 20) {
        oneValue = number % 100
        return `${dataNum[oneValue]}`
    }
    else return "";
}