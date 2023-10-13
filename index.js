const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate SVG content based on user input
function generateSVG({ characters, textColor, shape, shapeColor }) {
    let shapeElement;
    let textElement;
    const svgWidth = 300;
    const svgHeight = 200;
    let fontSize = 30;
    const cx = svgWidth / 2;
    const cy = svgHeight / 2;
    
    if (shape === 'circle') {
        const radius = Math.min(svgWidth, svgHeight) / 3;
        shapeElement = `<circle cx="${cx}px" cy="${cy}px" r="${radius}px" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
        const points = `${svgWidth / 2},${svgHeight / 4} ${svgWidth / 4},${(3 * svgHeight) / 4} ${(3 * svgWidth) / 4},${(3 * svgHeight) / 4}`;
        shapeElement = `<polygon points="${points}" fill="${shapeColor}"/>`;
    } else if (shape === 'square') {
        const size = Math.min(svgWidth, svgHeight) / 3;
        const x = (svgWidth - size) / 2;
        const y = (svgHeight - size) / 2;
        shapeElement = `<rect x="${x}px" y="${y}px" width="${size}px" height="${size}px" fill="${shapeColor}" />`;
    }

    textElement = `<text x="${cx}px" y="${cy}px" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-size="${fontSize}px">${characters}</text>`;

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
        ${shapeElement}
        ${textElement}
    </svg>`;

    return svgContent;
}

// Function to write SVG content to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully created ${fileName}!`);
        }
    });
}

// Function to initialize the application
async function main() {
    const logoQuestions = [
        {
            type: 'input',
            name: 'characters',
            message: 'Please enter up to three characters:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color keyword or hexadecimal number',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape for your logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color keyword or hexadecimal number for your shape:',
        },
    ];

    try {
        const logoAnswers = await inquirer.prompt(logoQuestions);
        const svgContent = generateSVG(logoAnswers);

        writeToFile('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (err) {
        console.error(err);
    }
}

main();
