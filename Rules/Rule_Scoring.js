let homeTeamScore = 0;
let awayTeamScore = 0;

// Function to simulate a goal
function scoreGoal(team) {
  if (team === 'home') {
    homeTeamScore += 1;
  } else if (team === 'away') {
    awayTeamScore += 1;
  }
  console.log(`Goal! Score: Home ${homeTeamScore} - Away ${awayTeamScore}`);
}

// Simulate a soccer match
scoreGoal('home'); // Home team scores a goal
scoreGoal('away'); // Away team scores a goal
scoreGoal('home'); // Home team scores another goal

console.log(`Final Score: Home ${homeTeamScore} - Away ${awayTeamScore}`);
