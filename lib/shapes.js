class Shape {
    constructor(txt, txtColor, color) {
        this.txt = txt;
        this.txtColor = txtColor;
        this.color = color;
    }
}

class circle extends Shape {
    constructor(txt, txtColor, color, shape) {
        super(txt, txtColor, color);
        this.shape = shape;
    }

    createShape() {

    }
}

class square extends Shape {
    constructor(txt, txtColor, color, shape) {
        super(txt, txtColor, color);
        this.shape = shape;
    }

    createShape() {
        
    }
}

class triangle extends Shape {
    constructor(txt, txtColor, color, shape) {
        super(txt, txtColor, color);
        this.shape = shape;
    }

    createShape() {
        
    }
}

function callCircle() {
    const newC = new circle();
    return newC.createShape();
}
function callTriangle() {
    const newT = new triangle();
    return newT.createShape();
}
function callSquare() {
    const newS = new square();
    return newS.createShape();
}
module.exports = {
    callCircle,
    callSquare,
    callTriangle,
  } 