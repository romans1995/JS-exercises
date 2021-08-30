const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
let maximum = 0;  
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
    console.log(minimum);
    for(let i = 0 ; i < grades.length ; i++){
        if(minimum > grades[i]){
            minimum = grades[i];
        }
        console.log(minimum);
    }
}
 console.log(minimum) ;
 let range  = max(grades) - minimum;
 console.log(range);

 const gradesSorted = [...grades].sort();
let median = gradesSorted[gradesSorted.length/2];
median;