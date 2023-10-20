// Define initial player properties
const player = {
  velocity: 10,  // Player's velocity
  controlSkill: 2, // Control skill
  kickingSkill: 3, // Kicking skill
  playerOrientation: 45, // Player's orientation angle (in degrees)
};

// Define initial ball properties
const ball = {
  velocity: 0,  // Initial ball velocity
  ballOrientation: 0,  // Initial ball orientation angle
};

// Function to simulate passing the ball
function simulatePass() {
  // Define the passing speed
  const passSpeed = 5;

  // Calculate the ball's velocity after the pass
  const ballAfterPassVelocity = ball.velocity + passSpeed;

  // Log the result
  console.log(`Ball velocity after the pass: ${ballAfterPassVelocity.toFixed(2)} m/s`);
}

// Function to simulate ball control by the player
function simulateBallControl() {
  // Calculate the ball control speed
  const controlSpeed = player.controlSkill;

  // Calculate the ball's velocity after control
  const ballAfterControlVelocity = ball.velocity + controlSpeed;

  // Log the result
  console.log(`Ball velocity after control: ${ballAfterControlVelocity.toFixed(2)} m/s`);
}

// Function to simulate taking a shot
function simulateShot() {
  // Define the shot speed and angle
  const shotSpeed = player.kickingSkill;
  const shotAngle = player.playerOrientation + 10; // Adding 10 degrees for the shot angle

  // Calculate the ball's velocity and angle after the shot
  const ballAfterShotVelocity = ball.velocity + shotSpeed;
  const ballAfterShotAngle = ball.ballOrientation + shotAngle;

  // Log the results
  console.log(`Shot velocity: ${ballAfterShotVelocity.toFixed(2)} m/s`);
  console.log(`Shot angle: ${ballAfterShotAngle.toFixed(2)} degrees`);
}

// Example usages
console.log("Simulating passing the ball:");
simulatePass();

console.log("\nSimulating ball control:");
simulateBallControl();

console.log("\nSimulating taking a shot:");
simulateShot();
