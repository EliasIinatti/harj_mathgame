let correctCount = 0;
let incorrectCount = 0;

function getRandomIntNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeNumbers() {
    let num1 = getRandomIntNumberInRange(1, 10);
    let num2 = getRandomIntNumberInRange(1, 10);
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    return num1 + num2;
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    let correctSum = randomizeNumbers();
    if (userAnswer === correctSum) {
        correctCount++;
        document.getElementById('correctCount').textContent = correctCount;
        alert("Correct answer!");
    } else {
        incorrectCount++;
        document.getElementById('incorrectCount').textContent = incorrectCount;
        alert("Incorrect answer!");
    }
}

// Call randomizeNumbers() to generate the first question when the page loads
window.onload = randomizeNumbers;

// Add event listener to the button
document.getElementById('submitBtn').addEventListener('click', checkAnswer);
