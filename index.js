const inquirer = require("inquirer");
const fs = require('fs');
const shapes = require('./lib/shapes');

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
    
        if(data.shape === 'circle') {
            shapeColor = shapes.callCircle( data.colorS, data.shape);
        }
        if(data.shape === 'triangle') {
            shapeColor = shapes.callTriangle( data.colorS, data.shape);
        }
        if(data.shape === 'square') {
            shapeColor = shapes.callSquare( data.colorS, data.shape);
        }

        logo = shapes.createLogo(data.letters, data.colorT, shapeColor);

        fs.writeFile('logo.svg', logo , (err) => {
        err ? console.error(err) : console.log('Generated logo.svg')
        });
    });
  
}

function init() {

    writeToFile();

}

init();