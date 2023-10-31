const Circle = require('./Circle');
const Square = require('./Square');
const Triangle = require('./Triangle');

describe('Shape', () => {

    describe('circle', () => {
      it('should return blue circle', () => {
        let color = "blue";
        const cs = new Circle(color);
        expect(cs.render()).toEqual(`<circle cx="145" cy="115" r="80" fill="blue"></circle>`);
      });
    });
    describe('square', () => {
        it('should return blue square', () => {
            let color = "blue";
            const shape = new Square(color);

            expect(shape.render()).toEqual('<rect x="75" y="50" width="145" height="145" fill="blue"/>');
        });
      });
    describe('triangle', () => {
        it('should return blue triangle', () => {
            let color = "blue";
            const shape = new Triangle(color);

            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

  });