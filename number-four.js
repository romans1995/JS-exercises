// You are given an array of a student's grades during the school year. Your task is to compute the following statistics:
// The range of the grades (difference between highest and lowest)
// The median grade (the grade in the middle)
// The range of the grades from the second half of the school year
// Here's a template you can use:
// const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
// // your code goes here
// console.log(...)

// The output of your code (what console.log prints) should be in the following format (notice the line-breaks and indentation):
// Stats:
//     Range: 40
//     Median: 88
//     Half Range: 12
// Test your code on different arrays of different sizes.
// Separate your code into functions! Avoid code duplication!

// Submit this code through your JS GitHub repo. Split your work into several commits.

const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
let maximum = 0;  
// first mission 
   const max =(grades) =>{
    for(let i = 0; i<grades.length;i++){
        if(maximum < grades[i]){
            maximum =grades[i];
        }
    }
    return maximum;
   }

const min = (grades) => {
    let minimum = grades[0]; 
     minimum = grades[0];
    for(let i = 0 ; i < grades.length ; i++){
        if(minimum > grades[i]){
            minimum = grades[i];
        }
    }
    return minimum;
}
 let range  = max(grades) - min(grades);

// second Mission 
 const gradesSorted = [...grades].sort();
let median = gradesSorted[gradesSorted.length/2];
median;
// thired mission 
let halfRanged = grades.slice(grades.length/2);
halfRanged = max(halfRanged) - min(halfRanged);

