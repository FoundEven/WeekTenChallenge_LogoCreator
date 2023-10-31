class Shape {
    constructor( color) {
        this.color = color;
    }
}
//This class is for making circles
class Circle extends Shape {
    constructor( color) {
        super( color);

    }

    createCircle() {
        return `<circle cx="145" cy="115" r="80" fill="${this.color}"></circle>`;
    }
}
// This class is for making squares
class Square extends Shape {
    constructor( color) {
        super( color);
    }

    createSquare() {
        return `<rect x="75" y="50" width="145" height="145" fill="${this.color}"/>`;
    }
}
//This class is for making triangles
class Triangle extends Shape {
    constructor( color) {
        super( color);

    }

    createTriangle() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

function createLogo(text,color,logo) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <g>
        ${logo}
        <text x="97" y="140" font-size="50" font-weight="bold" fill="${color}">${text}</text>
    </g>
</svg>`;
}

function callCircle(color) {
    const newC = new Circle(color);
    return newC.createCircle();
}
function callTriangle(color) {
    const newT = new Triangle(color);
    return newT.createTriangle();
}
function callSquare(color) {
    const newS = new Square(color);
    return newS.createSquare();
}
module.exports = {
    callCircle,
    callSquare,
    callTriangle,
    createLogo,
  } 