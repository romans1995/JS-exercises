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

 console.log(min(grades)) ;
 let range  = max(grades) - min(grades);
 console.log(range);
// second Mission 
 const gradesSorted = [...grades].sort();
let median = gradesSorted[gradesSorted.length/2];
median;
// thired mission 
let halfRanged = grades.slice(grades.length/2);
console.log(halfRanged);

const maxh =(halfRanged) =>{
    for(let i = 0; i < halfRanged.length; i++){
        if(maximum < halfRanged[i]){
            maximum = halfRanged[i];
        }
    }
    return maximum;
   }
   console.log(maxh(halfRanged));
   const minh =(halfRanged) =>{
    minimum =halfRanged[0];
    for(let i = 0; i < halfRanged.length; i++){
        if(minimum> halfRanged[i]){
            minimum =halfRanged[i];
        }
    }
    return minimum;
   }
   console.log(minh(halfRanged));
   halfRanged = (maxh(halfRanged)- minimum);
   console.log(halfRanged);

    