class GameTimer {
    constructor() {
        this.startTime = Date.now();
        this.currentTime = 0;
        this.isRunning = false;
        this.interval = null;
    }

    start() {
        if (!this.isRunning) {
            this.startTime = Date.now() - this.currentTime;
            this.isRunning = true;
            this.updateTime();
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.interval);
        }
    }

    reset() {
        this.currentTime = 0;
        this.updateTime();
    }

    updateTime() {
        this.interval = setInterval(() => {
            if (this.isRunning) {
                this.currentTime = Date.now() - this.startTime;
                this.displayTime();
            }
        }, 1000);
    }

    displayTime() {
        const seconds = Math.floor(this.currentTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        const timeString = `${hours}:${minutes % 60}:${seconds % 60}`;
        console.log(`Game Time: ${timeString}`);
    }
}

// Example usage:
const timer = new GameTimer();

// Start the timer
timer.start();

// Pause the timer after 10 seconds
setTimeout(() => {
    timer.pause();
}, 10000);

// Resume the timer after 5 seconds
setTimeout(() => {
    timer.start();
}, 15000);

// Reset the timer after 20 seconds
setTimeout(() => {
    timer.reset();
}, 20000);
