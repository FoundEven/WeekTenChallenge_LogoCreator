const inquirer = require("inquirer");
const fs = require('fs');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');

let logo = '';
let shapeColor = '';

function writeToFile() {

    inquirer.prompt([
        {
            type: 'input',
            message: 'What three letters do you want on your logo?',
            name: 'letters',
        },
        {
            type: 'input',
            message: 'What color do you want the text to be?',
            name: 'colorT',
        },
        {
            type: 'list',
            message: 'What shape do you want it to be?',
            choices: ['circle', 'triangle', 'square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What color do you want the shape to be?',
            name: 'colorS',
        },

    ]).then((data) => {
        //these create the shpae of the logo
        if(data.shape === 'circle') {
            const cs = new Circle( data.colorS);
            shapeColor = cs.render();
        }
        if(data.shape === 'triangle') {
            const shape = new Triangle( data.colorS);
            shapeColor = shape.render();
        }
        if(data.shape === 'square') {
            const shape = new Square(data.colorS);
            shapeColor = shape.render();
        }
        //this combines all of the pieces together to create the logo.
        logo = createLogo(data.letters, data.colorT, shapeColor);

        fs.writeFile('logo.svg', logo , (err) => {
        err ? console.error(err) : console.log('Generated logo.svg')
        });
    });
  
}

function createLogo(text,color,logo) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <g>
        ${logo}
        <text x="97" y="140" font-size="50" font-weight="bold" fill="${color}">${text}</text>
    </g>
</svg>`;
}

//function to start application
function init() {
    writeToFile();
}

init();