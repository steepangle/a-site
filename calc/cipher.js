function encryptCaesar(message, key) {
    let encryptedMessage = "";
    for (let char of message) {
        if (char.match(/[a-z]/i)) {
            let base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            encryptedMessage += String.fromCharCode(((char.charCodeAt(0) - base + key) % 26 + 26) % 26 + base);
        } else {
            encryptedMessage += char;
        }
    }
    return encryptedMessage;
}

function encryptMessage() {
    const message = document.getElementById("message").value;
    const key = parseInt(document.getElementById("key").value);
    if (isNaN(key)) {
        alert("Please enter a valid key.");
        return;
    }
    const encrypted = encryptCaesar(message, key);
    document.getElementById("output").textContent = encrypted;
}

function decryptMessage() {
    const message = document.getElementById("message").value;
    const key = parseInt(document.getElementById("key").value);
    if (isNaN(key)) {
        alert("Please enter a valid key.");
        return;
    }
    const decrypted = encryptCaesar(message, -key);
    document.getElementById("output").textContent = decrypted;
}

function logout() {
    href = "../index.html";
}