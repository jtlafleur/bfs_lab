// BFS Lab
// By: Jonathan Lafleur, Michael Macari and Anthony Rusignuolo
var fs = require('fs');

class Graph {
    constructor() {

    }

    fillGraph(){

    }

    bfs(){

    }
}

function main() {
    let file = fs.readFileSync('infile.dat', 'utf8').split(/\r?\n/);

    let line1 = file.shift();
    console.log(line1);

    let myGraph = new Graph(line1[0], line1[1])
}

main();