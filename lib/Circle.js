//This class is for making circles
class Circle  {
    constructor( color) {
        this.color = color;

    }

    render() {
        return `<circle cx="145" cy="115" r="80" fill="${this.color}"></circle>`;
    }
}

module.exports = Circle
