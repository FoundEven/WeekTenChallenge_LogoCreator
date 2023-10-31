// This class is for making squares
class Square {
    constructor( color) {
        this.color = color;
    }

    render() {
        return `<rect x="75" y="50" width="145" height="145" fill="${this.color}"/>`;
    }
}

module.exports = Square