function incrementCounter() {
      const counterElement = document.getElementById("counter");
      const currentValue = parseInt(counterElement.textContent);
      alert(currentValue); // Alert the current value (before incrementing)
      counterElement.textContent = currentValue + 1; // Update the counter
    }