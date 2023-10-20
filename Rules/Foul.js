function checkForFoul(defendingPlayer, attackingPlayer) {
    // You can define rules for fouls based on conditions, e.g., proximity and actions.
    const distance = calculateDistance(defendingPlayer, attackingPlayer);
    const isFoul = distance < 2; // Adjust the distance threshold as needed.

    if (isFoul) {
        return true;
    } else {
        return false;
    }
}

function calculateDistance(player1, player2) {
    // Calculate the distance between two players.
    const dx = player1.x - player2.x;
    const dy = player1.y - player2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Example usage:
const defendingPlayer = { x: 5, y: 5 };
const attackingPlayer = { x: 7, y: 7 };

if (checkForFoul(defendingPlayer, attackingPlayer)) {
    console.log("Foul!");
} else {
    console.log("No foul.");
}
