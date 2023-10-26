const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    attempts++;
    if (userGuess === targetNumber) {
        document.getElementById("message").textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (userGuess < targetNumber) {
        document.getElementById("message").textContent = "Try a higher number.";
    } else {
        document.getElementById("message").textContent = "Try a lower number.";
    }
}
