// 定义初始球员和对手属性
const defender = {
  defenseStrength: 1.5, // Defense strength coefficient
  tackleSuccessCoefficient: 0.2, // Tackle success coefficient
  speed: 5, // Defender's speed
  position: { x: 0, y: 0 }, // Initial position of the defender
};

const opponent = {
  position: { x: 10, y: 0 }, // Initial position of the opponent
};

// 计算施加给对手的防御力的函数
function calculateDefensiveForce(defender, opponent) {
  const displacementVector = {
    x: opponent.position.x - defender.position.x,
    y: opponent.position.y - defender.position.y,
  };

  const defensiveForce = {
    x: defender.defenseStrength * displacementVector.x,
    y: defender.defenseStrength * displacementVector.y,
  };

  return defensiveForce;
}

// 模拟铲球尝试并计算成功概率的函数
function simulateTackle(defender) {
  const tackleSuccessProbability =
    1 - Math.exp(-defender.tackleSuccessCoefficient * defender.speed);

  // 记录铲球成功概率，好难写啊，不想写
  console.log(`Tackle Success Probability: ${tackleSuccessProbability.toFixed(2)}`);
}

// 模拟施加侧向压力的功能，太多了，希望没有bug
function simulateSidewaysPressure(defender) {
  const displacementToSideline = defender.position.x; // Simplified, considering a single dimension
  const sidewaysPressureForce = defender.defenseStrength * displacementToSideline;

  // Log the sideways pressure force
  console.log(`Sideways Pressure Force: ${sidewaysPressureForce.toFixed(2)}`);
}

// Example usages
console.log("Simulating applying defensive force:");
const defensiveForce = calculateDefensiveForce(defender, opponent);
console.log(`Defensive Force: (${defensiveForce.x.toFixed(2)}, ${defensiveForce.y.toFixed(2)})`);

console.log("\nSimulating a tackle attempt:");
simulateTackle(defender);

console.log("\nSimulating applying sideways pressure:");
simulateSidewaysPressure(defender);
