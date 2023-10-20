let isOffside = false;

// Function to check for an offside situation
function checkOffside(attackingPlayer, lastDefender) {
  // Calculate the distance between the attacking player and the last defender
  const distance = attackingPlayer.position - lastDefender.position;

  if (distance <= 0) {
    // Not offside
    isOffside = false;
  } else {
    // Offside
    isOffside = true;
  }
}

// Function to handle offside decisions
function makeOffsideDecision() {
  if (isOffside) {
    console.log('Offside called.');
  } else {
    console.log('No offside.');
  }
}

// Simulate an offside situation
const attacker = { position: 30 }; // Attacking player's position
const lastDefender = { position: 40 }; // Last defender's position

checkOffside(attacker, lastDefender);
makeOffsideDecision();
