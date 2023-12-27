function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function showCalculator() {
    var name = document.getElementById('nameInput').value;
    document.getElementById('welcomeMessage').innerText = 'مرحبا في الحاسبة البسيطة.. ' + name;
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('calculatorScreen').style.display = 'block';
}

// Rest of your calculator functions
