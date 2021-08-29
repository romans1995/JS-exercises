//  hey I found 3 ways to get to the solution one after another and just wanted to share :D 
const num = -8
let absolute;

if (num > 0){
    absolute = num;
} else {
    absolute = num + (num * -2);
    
}
console.log(absolute);

if (num < 0){
    absolute = -num;
} else {
    absolute = num;

}
console.log(absolute)

absolute = num < 0 ? -num : num;
console.log(absolute);

