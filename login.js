let validCredentials = {};
    
async function loadCredentials() {
    try {
        const response = await fetch('./credentials.json');
        if (!response.ok) throw new Error('Failed to load credentials');
        validCredentials = await response.json();
    } catch (error) {
        console.error('Error loading credentials:', error);
    }
}

function hashSHA256(input) {
    return CryptoJS.SHA256(input).toString();
}

async function login() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (Object.keys(validCredentials).length === 0) {
        errorMessage.textContent = 'Failed to load credentials. Please try again.';
        return;
    }
   const hashedUsername = hashSHA256(username);
   const hashedPassword = hashSHA256(password);
    
    if (validCredentials[hashedUsername] === hashedPassword) {
        window.location.href = './home.html';
    } else {
        errorMessage.textContent = 'Invalid username or a-ID.';
    }
}

window.onload = loadCredentials;