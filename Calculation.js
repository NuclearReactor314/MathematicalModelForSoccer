// Function to calculate air resistance
function calculateAirResistance(ballVelocity) {
    // Simplified air resistance model
    // In a complete model, you'd use the drag force equation
    return 0.1 * ballVelocity;
}

// Function to calculate time to player
function calculateTimeToPlayer(playerVelocity, netVelocity) {
    return playerVelocity > 0 ? ballVelocity / (playerVelocity - netVelocity) : Infinity;
}

// Function to calculate horizontal distance
function calculateHorizontalDistance(playerVelocity, time) {
    return playerVelocity * time;
}

// Function to calculate and display results
function calculateResults() {
    const ballVelocity = parseFloat(document.getElementById('ball-velocity').value);
    const playerVelocity = parseFloat(document.getElementById('player-velocity').value);

    // Perform calculations
    const airResistance = calculateAirResistance(ballVelocity);
    const netVelocity = ballVelocity - airResistance;
    const time = calculateTimeToPlayer(playerVelocity, netVelocity);
    const horizontalDistance = calculateHorizontalDistance(playerVelocity, time);

    // Display results
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The ball travels a horizontal distance of ${horizontalDistance.toFixed(2)} meters.`;
}

// Add a click event listener to the Calculate button
document.getElementById('calculate-button').addEventListener('click', calculateResults);
