// // Write a functions that plays city trivia:
// function guessCity(capital, coastal, famous, ancient) {
//     // your code goes here
// }
// The arguments are all true or false. The return value is the name of the city.
// Jerusalem is ancient, famous and a capital
// Tel Aviv is famous and coastal
// Acre is coastal and ancient
// Katzrin is ancient
// Zikim is coastal
// Musmus is not any of the above
// For example, guessCity(false, true, true, false) returns "Tel Aviv".
// No other cities are recognized.

// As usual, upload your code to your JS GitHub repo.
// // (No offense was meant towards any city - please don't take personally)

// bool1 = famous bool2 =coastal bool3 = capital bool4 = ancient
const guessCity = (bool1,bool2,bool3,bool4) => {
    let citys = ["Tel aviv","Bat yam","Jeruslem","Haifa","baer shevva"];
    if(bool1 === true && bool2 === false && bool3 === true && bool4 === true ){
        return citys[2];
    }else if (bool1 === false && bool2 === true && bool3 === false && bool4 === false ){
        return citys[1];
    }else if (bool1 === true && bool2 === true && bool3 === true && bool4 === false ){
        return citys[0];
    }else if (bool1 === true && bool2 === true && bool3 === false && bool4 === true ){
        return citys[citys.length -2];
    }else if (bool1 === false && bool2 === false && bool3 === false && bool4 === true ){
        return citys[citys.length -1];
    }
    }
