function toDecimal(number, base) {
    if (base === "bin") return parseInt(number, 2) + fractionalToDecimal(number.split('.')[1] || '', 2);
    if (base === "oct") return parseInt(number, 8) + fractionalToDecimal(number.split('.')[1] || '', 8);
    if (base === "hex") return parseInt(number, 16) + fractionalToDecimal(number.split('.')[1] || '', 16);
    return parseFloat(number);
}

function fractionalToDecimal(fractional, base) {
    let decimal = 0;
    for (let i = 0; i < fractional.length; i++) {
        decimal += parseInt(fractional[i], base) * Math.pow(base, -(i + 1));
    }
    return decimal;
}

function fromDecimal(number, base) {
    let integerPart = Math.floor(number);
    let fractionalPart = number - integerPart;

    let integerString = integerPart.toString(base);
    let fractionalString = '';
    while (fractionalPart > 0 && fractionalString.length < 10) {
        fractionalPart *= base;
        fractionalString += Math.floor(fractionalPart).toString(base);
        fractionalPart -= Math.floor(fractionalPart);
    }
    return integerString + (fractionalString ? '.' + fractionalString : '');
}

function updateResults(inputId, base) {
    const input = document.getElementById(inputId).value;
    if (!input) {
        clearResults();
        return;
    }

    try {
        const decimalValue = toDecimal(input, base);

        document.getElementById('binResult').textContent = fromDecimal(decimalValue, 2);
        document.getElementById('octResult').textContent = fromDecimal(decimalValue, 8);
        document.getElementById('decResult').textContent = decimalValue.toString();
        document.getElementById('hexResult').textContent = fromDecimal(decimalValue, 16).toUpperCase();
    } catch (e) {
        clearResults();
        console.error("Invalid input:", e);
    }
}

function clearResults() {
    document.getElementById('binResult').textContent = '';
    document.getElementById('octResult').textContent = '';
    document.getElementById('decResult').textContent = '';
    document.getElementById('hexResult').textContent = '';
}

document.getElementById('binInput').addEventListener('input', () => updateResults('binInput', 'bin'));
document.getElementById('octInput').addEventListener('input', () => updateResults('octInput', 'oct'));
document.getElementById('decInput').addEventListener('input', () => updateResults('decInput', 'dec'));
document.getElementById('hexInput').addEventListener('input', () => updateResults('hexInput', 'hex'));

function logout() {
    href = "https://a-site.42-web.io/index.html";
}
