document.getElementById('shape').addEventListener('change', updateShapeInputs);

function updateShapeInputs() {
    const shape = document.getElementById('shape').value;
    const shapeInputs = document.getElementById('shape-inputs');
    shapeInputs.innerHTML = '';

    if (shape === 's') {
        shapeInputs.innerHTML = '<input type="number" id="radius" placeholder="Enter the radius in cm">';
    } else if (shape === 'c') {
        shapeInputs.innerHTML = '<input type="number" id="side" placeholder="Enter the side length in cm">';
    } else if (shape === 'y') {
        shapeInputs.innerHTML = '<input type="number" id="radius" placeholder="Enter the radius in cm"><input type="number" id="height" placeholder="Enter the height in cm">';
    } else if (shape === 'u') {
        shapeInputs.innerHTML = '<input type="number" id="length" placeholder="Enter the length in cm"><input type="number" id="width" placeholder="Enter the width in cm"><input type="number" id="height" placeholder="Enter the height in cm">';
    }
}

function calculate() {
    const density = parseFloat(document.getElementById('density').value);
    const shape = document.getElementById('shape').value;
    let volume = 0;
    let mass = 0;

    if (shape === 's') {
        const radius = parseFloat(document.getElementById('radius').value);
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    } else if (shape === 'c') {
        const side = parseFloat(document.getElementById('side').value);
        volume = Math.pow(side, 3);
    } else if (shape === 'y') {
        const radius = parseFloat(document.getElementById('radius').value);
        const height = parseFloat(document.getElementById('height').value);
        volume = Math.PI * Math.pow(radius, 2) * height;
    } else if (shape === 'u') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        const height = parseFloat(document.getElementById('height').value);
        volume = length * width * height;
    }

    mass = volume * density / 1e6;
    document.getElementById('output').textContent = `Mass: ${mass}kg\nVolume: ${volume / 1e6}m³`;
}

updateShapeInputs();

function logout() {
    href = "../index.html";
}