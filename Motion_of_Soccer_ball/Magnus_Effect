// Constants
const airDensity = 1.225; // Air density (kg/m^3)
const crossSectionalArea = 0.043; // Cross-sectional area of the ball (m^2)
const initialVelocity = 20; // Initial velocity of the ball (m/s)
const spinRate = 20; // Spin rate of the ball (revolutions per second)
const spinDirection = 1; // 1 for counterclockwise, -1 for clockwise

// Function to calculate the Magnus effect force
function calculateMagnusEffectForce(velocity) {
  const liftCoefficient = 0.2; // Adjust this value based on ball characteristics

  // Calculate the Magnus effect force
  const magnusEffectForce = (0.5 * liftCoefficient * airDensity * crossSectionalArea * velocity ** 2) * spinDirection;

  return magnusEffectForce;
}

// Function to simulate the ball's motion considering the Magnus effect
function simulateBallMotionWithMagnusEffect(totalTime, timeStep) {
  let currentTime = 0;
  let velocity = initialVelocity;

  while (currentTime < totalTime) {
    // Calculate the Magnus effect force based on current velocity
    const magnusEffectForce = calculateMagnusEffectForce(velocity);

    // Update the velocity (considering the Magnus effect)
    velocity -= (magnusEffectForce / 0.5) * timeStep;

    // Log the velocity at each time step
    console.log(`Time: ${currentTime.toFixed(2)} s - Velocity: ${velocity.toFixed(2)} m/s`);

    currentTime += timeStep;
  }
}

// Example usage
const totalTimeToSimulate = 5; // Total time to simulate in seconds
const timeStep = 0.01; // Time step for simulation

simulateBallMotionWithMagnusEffect(totalTimeToSimulate, timeStep);
