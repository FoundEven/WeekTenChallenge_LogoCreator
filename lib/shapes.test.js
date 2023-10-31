const Shape = require('./shapes');

describe('Shape', () => {

    describe('circle', () => {
      it('should return blue circle', () => {
        const cs = new Shape();
        let color = "blue";
        expect(cs.callCircle(color)).toEqual('<circle cx="145" cy="115" r="80" fill="blue" />');
      });
    });
    describe('square', () => {
        it('should return blue square', () => {
            const shape = "";
            let color = "blue";
            expect(shape.createSquare(color)).toEqual('<rect x="75" y="50" width="145" height="145" fill="blue" />');
        });
      });
    describe('triangle', () => {
        it('should return blue triangle', () => {
            const shape = new Shape();
            let color = "blue";
            expect(shape.callTriangle(color)).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

  });