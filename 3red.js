const num = -8
let absolute;
// your code goes here
if(num > 0){
    absolute = num;
}else{
    absolute = num +(num * -2);
}

console.log(absolute)
// output 8




// or 

const num = -8
let absolute;
// your code goes here
if(num < 0){
    absolute = -num;
}else{
    absolute = num
}

console.log(absolute)
// output 8

// or 

const num = -10
absolute = num < 0 ? -num : num;
console.log(absolute);

// output 10