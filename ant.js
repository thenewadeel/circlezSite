function Ant() {
    this.dist = 0;
    this.move = function (dir) {
        if (!dir) {
            this.dist += 0.8 * random(-1, 1);
        }
    }
}