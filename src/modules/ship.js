class Ship {
  constructor(len, hitTimes = 0, isSunk = false) {
    this.length = len;
    this.hitTimes = hitTimes;
    this.sink = isSunk;
  }

  hit() {
    this.hitTimes += 1;
    this.isSunk();
  }

  isSunk() {
    if (this.hitTimes === this.length) {
      this.sink = true;
    }
    return this.sink;
  }
}

module.exports = Ship;