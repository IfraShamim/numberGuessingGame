  // Random number between 1 and 100
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  // Function to check the guess
  function checkGuess() {
      let userGuess = parseInt(document.getElementById('guessInput').value);
      let message = document.getElementById('message');
      attempts++;

      if (userGuess === randomNumber) {
          message.textContent = `Congratulations! You guessed the number ${checkGuess} correctly in ${attempts} attempts!`;
          message.style.color = "green";
      } else if (userGuess > randomNumber) {
          message.textContent = "Too high! Try again.";
          message.style.color = "red";
      } else if (userGuess < randomNumber) {
          message.textContent = "Too low! Try again.";
          message.style.color = "red";
      }

      // Display the number of attempts
      document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
  }

  // Function to restart the game
  function restartGame() {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      document.getElementById('guessInput').value = "";
      document.getElementById('message').textContent = "";
      document.getElementById('attempts').textContent = "Attempts: 0";
  }
  const guessInput = document.getElementById('guessInput');

guessInput.addEventListener('input', function () {
  const min = parseInt(guessInput.min);
  const max = parseInt(guessInput.max);
  const value = parseInt(guessInput.value);

  if (value < min) {
    guessInput.value = min; // Set to min if below range
  } else if (value > max) {
    guessInput.value = max; // Set to max if above range
  }
});