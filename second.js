const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
// your code goes here


    solutionA = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
    solutionB = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)

console.log(solutionA, solutionB);
// output 3 3




// more examples 
// const a = -1; b = 1; c = 1; 
// output -0.6  1.6


// const a = 2; b = 20; c = 20; 
// output -1.1 -8.8