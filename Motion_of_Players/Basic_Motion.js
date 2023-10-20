// Define the player object with initial position and velocity
const player = {
  position: { x: 0, y: 0 },
  velocity: { vx: 0, vy: 0 },
  acceleration: { ax: 0, ay: 0 },
};

// Function to update the player's position, velocity, and acceleration
function updatePlayerMotion(timeStep) {
  // Update position using current velocity
  player.position.x += player.velocity.vx * timeStep;
  player.position.y += player.velocity.vy * timeStep;

  // Update velocity using current acceleration
  player.velocity.vx += player.acceleration.ax * timeStep;
  player.velocity.vy += player.acceleration.ay * timeStep;

  // Update acceleration based on player's physical actions or external factors
  // Example: Player accelerates to move forward
  player.acceleration.ax = 2.0; // Horizontal acceleration
  player.acceleration.ay = 0.0; // No vertical acceleration in this example
}

// Function to simulate the player's motion
function simulatePlayerMotion(totalTime, timeStep) {
  let currentTime = 0;

  while (currentTime < totalTime) {
    updatePlayerMotion(timeStep);

    // Log the player's position at each time step
    console.log(`Time: ${currentTime.toFixed(2)} s - Position: (${player.position.x.toFixed(2)} m, ${player.position.y.toFixed(2)} m)`);

    currentTime += timeStep;
  }
}

// Example usage
const totalTimeToSimulate = 10; // Total time to simulate in seconds
const timeStep = 0.1; // Time step for simulation

simulatePlayerMotion(totalTimeToSimulate, timeStep);
