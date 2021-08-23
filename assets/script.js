class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    get newName() {
        return this.name;
    }
    set newName(newName) {
        this.name = newName;
    }
    hunt() {
        this.food += 2;
    }
    eat() {
        if (this.food < 1) {
            this.isHealthy = false;
        }
        if (this.food > 0) {
            this.isHealthy = true;
            this.food -= 1;
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passageiros = [];
    }
    get newCapacity() {
        return this.capacity;
    }
    set newCapacity(newCapacity) {
        this.capacity = newCapacity;
    }
    getAvailableSeatCount() {
        let availableSeats = this.capacity - this.passageiros.length;
        if (availableSeats > 0) {
            return availableSeats;
        } else {
            return 0
        }
    }
    join(passageiro) {
        if (this.getAvailableSeatCount() > 0) {
            this.passageiros.push(passageiro);
        }
    }
    shouldQuarantine() {
        for (let i = 0; i < this.passageiros.length; i++) {
            if (this.passageiros[i].isHealthy === false) {
                return true;
            }
        }
        return false
    }
    totalFood() {
        let totalFood = 0;
        for (let i = 0; i < this.passageiros.length; i++) {
            totalFood += this.passageiros[i].food;
        }
        return totalFood;
    }
}