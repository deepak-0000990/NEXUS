// // primitive data type

// const num = 10;
// console.log(num);

// // Non Primitive datatype
// const obj = {
//     id:10,
//     balance:200
// }

// obj.id = 11;
// console.log(obj);

// let obj2 = {
//     id:20,
//     money:30
// };

// // location of obj2 is 800
// // location of obj is 6521

// obj = obj2;
// // error

// string in js
let str1 = "Hello How are you";
let str2 = 'Heyy i am fine ';
let str3 = `How's going`;

let price = 80;
// 

console.log(`price of the fresh tomato is ${price} , get is asap`);
console.log("price of the fresh tomato is", price , "get it asap");
// console.log(str1, str2, str3);

//  string concatentaion
let s1 = "hello";
let s2 = " Coder Army";
let s3 = s1+s2;
console.log(s3.length);

//  "hello coder army"
console.log('"hello coder army"');
// 'hello coder army'
console.log("'hello coder army'");

// Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.
let message = "Hey how are you ";
console.log(message);
// escape character \
let comment = "Hey i am fine"
console.log(comment);

let special = "Deepak";
console.log(special[4]);
console.log(special.charAt(3));


// to lowercase
// to uppercase
console.log(special.toLowerCase());
let strtemp = special.toUpperCase();
// console.log(strtemp);
// console.log(special);

//changing in String
let hero = "Hey how are you"
console.log(hero.indexOf("how"))
console.log(hero.lastIndexOf("you"))
console.log(hero.includes("are"))

//Extracting Sustring
let newstring = "HelloDon"
//slice can take negative index
console.log(newstring.slice(-2,-4))  // Not print the last index like 0-2 so not print the *2 only print the 0,1
console.log(newstring.substring(1,4)) //Not use in this negative index
console.log(newstring.substr(5,1))

let str = "Hello how are you how"
console.log(str.replace("how","Deepak"))
console.log(str.replaceAll("how","Deepak"))

// split String
let str7 = "Money, Honey, Bunny, funny"
console.log(str7.split(", "))

//Trimming the string 
let str8 = "           heyyyyyyyy  n     "
console.log(str8.trim())

//New way to create string
let lateststring = new String ("hello Deepak")
console.log( lateststring)