class Player {
    constructor(name) {
        this.name = name;
        this.yellowCards = 0;
        this.redCards = 0;
    }

    receiveYellowCard() {
        this.yellowCards++;
        console.log(`${this.name} receives a yellow card.`);
        if (this.yellowCards >= 2) {
            this.receiveRedCard();
        }
    }

    receiveRedCard() {
        this.redCards++;
        console.log(`${this.name} receives a red card and is sent off!`);
    }
}

// Example usage:
const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

player1.receiveYellowCard(); // Player 1 receives a yellow card.
player2.receiveYellowCard(); // Player 2 receives a yellow card.
player2.receiveYellowCard(); // Player 2 receives another yellow card and gets a red card.

console.log(`Player 1 has ${player1.yellowCards} yellow card(s) and ${player1.redCards} red card(s).`);
console.log(`Player 2 has ${player2.yellowCards} yellow card(s) and ${player2.redCards} red card(s).`);
