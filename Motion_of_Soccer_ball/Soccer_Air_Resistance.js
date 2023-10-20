// Constants
const g = 9.81; // Acceleration due to gravity (m/s^2)
const initialVelocity = 15; // Initial velocity of the ball (m/s)
const launchAngle = 45; // Launch angle (degrees)
const airDensity = 1.225; // Air density (kg/m^3)
const crossSectionalArea = 0.043; // Cross-sectional area of the ball (m^2)
const dragCoefficient = 0.47; // Drag coefficient (typical for a sphere)

// Convert launch angle to radians
const launchAngleRad = (launchAngle * Math.PI) / 180;

// Initial positions
let x = 0;
let y = 0;

// Initial velocities
const initialVelocityX = initialVelocity * Math.cos(launchAngleRad);
const initialVelocityY = initialVelocity * Math.sin(launchAngleRad);

// Time variables
let time = 0;
const timeStep = 0.01;

// Simulation loop
while (y >= 0) {
  // Calculate air resistance
  const velocity = Math.sqrt(initialVelocityX ** 2 + initialVelocityY ** 2);
  const airResistance = -0.5 * airDensity * crossSectionalArea * dragCoefficient * velocity * velocity;

  // Calculate acceleration in the x and y directions
  const accelerationX = airResistance * initialVelocityX / (velocity * 2);
  const accelerationY = -g + (airResistance * initialVelocityY / (velocity * 2));

  // Update velocities
  initialVelocityX += accelerationX * timeStep;
  initialVelocityY += accelerationY * timeStep;

  // Update positions
  x += initialVelocityX * timeStep;
  y += initialVelocityY * timeStep;

  // Increment time
  time += timeStep;

  // Output position at each time step
  console.log(`Time: ${time.toFixed(2)} s - Position: (${x.toFixed(2)} m, ${y.toFixed(2)} m)`);
}
