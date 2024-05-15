////////////////////////////////////////задача на гонки////////////////////
// let arr = [5, 15, 6, 18, 9, 12, 8];
// let arr2 = arr.concat();
// arr2 = arr2.sort((a, b) => a - b).reverse();

// function result(array) {
//     let result = []
//     let medal = ["gold medal", "silver medal", "bronze medal"]
//    for(let i = 0; i < array.length; i++) {
//         let n = array[i];
//         let index =  arr2.indexOf(n);
//         if(index < 3) {
//             result.push(medal[index]);
//         } else {
//          result.push(index + 1);
//         }
//    }
//    return result;
// }
// console.log(result(arr));
//////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////// АРБУЗ ////////////////////

// let mass1 = 12;
// let mass2 = 13;

// function possible(arg) {
//     if(arg <= 2 || arg % 2 != 0) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(possible(mass1));
// console.log(possible(mass2));
//////////////////////////////////////// СЛИШКОМ ДЛИННЫЕ СЛОВА ////////////////////////////////////////

// let word = "aqwertyuiopa" //14el
// let word2 = "bhellob" //7el
// function abr(words) {
//     if(words.length > 10) {
//         return (words[0] + (words.length - 2) + words.slice(-1));
//     } else {
//         return words;
//     }
// }
// console.log(abr(word));
// console.log(abr(word2));
//////////////////////////////////////// КОМАНДА ////////////////////////////////////////

// let n = ["1 1 0", "1 0 1", "0 0 1", "0 1 0", "0 1 1"];

// function tasks(arr) {
//     let result = 0;
//     for(let item of arr) {
//         item = item.split(" ").reduce((key, a) => +key + +a);
//         if(item > 1) {
//             result++
//         }
        
//     }
//     return console.log(result);
// }

// tasks(n);

//////////////////////////////////////// ТЕАТРАЛЬНАЯ ПЛОЩАДЬ ////////////////////////////////////////

// let quad = 3;
// let a = 9;
// let b = 9;

// function remont(a, b, quad) {
//     let horizont = Math.ceil(a / quad);
//     let vertical = Math.ceil(b / quad);
//     result = horizont * vertical;
//     return console.log(result);
// }
// remont(a, b, quad);

//////////////////////////////////////// Bit++ ////////////////////////////////////////

// let str = "10 9 8 7 7 7 5 5"
// let a = 8;
// let b = 11;
// function result(str, b) {
//     let finalists = 0;
//     let arr = str.split(" ");
//     for(let item of arr) {
//         if(item > b) {
//             finalists++;
//         }
//     }
//     if(finalists > 0) {
//     return console.log(finalists);
//     } else {
//         return console.log(0);
//     }
// }

// result(str, b);


////////////////////////// Укладка доминошками ///////////////////////////////

// let poleA = 3;
// let poleB = 3;

// function result(a, b) {
//     let x = Math.floor((a * b) / 2);
//     return console.log(x);
// }
// result(poleA, poleB);

////////////////////////// Красивая матрица ///////////////////////////////


// let arr = [[0, 0, 0, 0, 0], 
//           [0, 0, 0, 0, 0], 
//           [0, 0, 0, 0, 0], 
//           [0, 0, 0, 0, 0], 
//           [0, 0, 0, 0, 0], ]

// function step(array) {
//     for(let item of array) {
//        let result = item.indexOf(1);
//        if (result >= 0) {
//         let xSteps = Math.abs(2 -result);
//         let ySteps = Math.abs(2 - array.indexOf(item));
//         return ySteps + xSteps;
//        };
//     };
// };
// console.log(step(arr));

///////////////////////////////// Петя и строки /////////////////////////////////

// let str = "YhjbnDgjJjH";
// let str2 = "NnkJGBJgbvJ";

// function badPetya(str, str2) {
//     let a = str.toLowerCase()
//     let b = str2.toLowerCase()
//     if( a == b) {
//         return 0;
//     } else if(a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// };

// console.log(badPetya(str, str2));

///////////////////////////////// Математика спешит на помощь /////////////////////////////////

// let str = "1+1+3+1+3";

// function sum(str) {
//     let arr = str.split("+")
//     arr = arr.sort((a, b) => a - b).join("+");
//     console.log(arr);
//     return arr;
// }
// sum(str);


///////////////////////////////// Капитализация слова /////////////////////////////////




