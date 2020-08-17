                   //class 1 extensions
                  // class2 console

// console.time("Your code took");
// console.log("hello world");
// console.log(10+5);
// console.log(true)
// console.log([1,2,3,4,5]);
// console.log({name:"abc",roll:123});
// console.table({name:"abc",roll:123});
// console.warn("this is a warning");
// // console.clear();
// console.timeEnd("your code took")
// // console.assert(566 < 189,"age > 189 is not possible");
// console.error("this is an error");


                  //class 3 let,const,var

/*
rules for assigning variable

1.Cannot start with number
2.can start with letter , _ , $
3.are case sensitive

*/

//examples

// var name = "hello world";
// var first_name = "hello";
// var last_$name = "world";
// var fullname1 = "hello world";

//In modern javascript mostly developers used let and const

//const use only one time and will never replace by any variable

// const ownerName = "jeff bezof";
// console.log(ownerName);

//let has block level scope
// {
//     let city = "rome";
//     city = "islamabad"
//     console.log(city); //islamabad
// }
// console.log(city);//islamabad

//const arr value can update but not assign again with same variable name 
//i.e const arr = [1,2,3]
//arr = [3,4,5] //error while using const

// const arr = [1,2,3,4,5];
// arr.push(10);
// console.log(arr);


//cases in javascript
/*
1.camelCase //most usable
2.kebab-case
3.snake_case
4.PascalCase
*/



            // class 4 Data types(primitive and reference types)

 //Primitive dataTypes(stack) : string("any name"),number(123),boolean(T,F),null(),undefined(''),symbol(es6)

 /*

//string
let name = "hello world";
console.log("my name is",name);
console.log("my dataType is",(typeof name));

//numbers
let marks = 80;
console.log("my marks is",marks);
console.log("DataType is",(typeof marks));


//boolean
let isDriver = true;
console.log("DataType : ",typeof isDriver);

//null
let isVal = null;
console.log("DataType: ",typeof isVal);

//undefined
let isUnd = undefined;
console.log("DataType: ",typeof isUnd);


 //reference dataTYpe(heap) : Arrays,object literal,function,dates

 //arrays
let arr = [1,2,"tesla",4,true];
console.log("DataType: ",typeof arr);

//objects literals

let data = {
    name:"tesla",
    owner:"elan musk"
}
console.log("DataType: ",typeof data);

//function

function findname() {
    
}
console.log("DataType: ",typeof findname);


//date

let date = new Date();
console.log("DataType: ",typeof date);

*/

             //class 5 type conversion & coercion

/*

let myVar;
myVar = 30;
console.log(myVar,typeof myVar);

//conversion of variable from number to string
myVar = String(34);
console.log(myVar,typeof myVar);

//boolean to string
let booleanVal = String(true);
console.log(booleanVal,typeof booleanVal);

//date to string
let date = String(new Date());
console.log(date,typeof date);

//arr to string
let arr = String([1,2,3,4,5]);
console.log(arr.length,typeof arr); //length 9

let arr2 = [1,2,3,4,5];
console.log(arr2.length,typeof arr2); //length 5

//Another method to convert into string
let i = 9;
console.log(i.toString());

//conversion into number
let str1 = "3232";
console.log(str1,typeof str1);

str1 = Number(str1);
console.log(str1,typeof str1);

//parse int and parse float

let number ='34';
console.log(number,typeof number);

number =parseInt('34');
console.log(number,typeof number);

number =parseInt('34.46');
console.log(number,typeof number);

number =parseFloat('34.46');
console.log(number,typeof number);

console.log(number.toFixed(1));


//type coercion

let myStr = "110";
let myNum = 32;
console.log(myStr + myNum); //11032

myStr = Number(myStr);
console.log(myStr + myNum); //142

*/


        //class 6 properties method and template lietrals
/*

console.log("class 6");

const name = "Watson";
const greeting = "Good Morning";
console.log(greeting + ' ' +name);

//concatinate function

let html;
html = "<h1>Hello World</h1>";

// console.log(html)
// html = html.concat('this is my page',' how are you');
// console.log(html)

//find length

        // console.log(html.length)

//change case

// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


//index

console.log(html[1]);

//indexOf

console.log(html.indexOf('W'));

//last indexOf
console.log(html.lastIndexOf('l'))

//charAt
console.log(html.charAt(10))

//endswith
console.log(html.endsWith(">")); //true

//includes
console.log(html.includes('Hello')); //true

//substring
console.log(html.substring(0,4));

//slice
console.log(html.slice(0,4));

//split
console.log(html.split(' '));


//replace
console.log(html.replace('Hello','Hey'));



                   //template literals

let fruit1 = 'apple';
let fruit2 = 'oranges';                   
let myHtml = `Hello ${name}
              <h1>This is "my" heading</h1>
              <p>You like ${fruit1} and ${fruit2};
              `;
document.body.innerHTML = myHtml;

*/

       //class 7 Arrays and Objects
                
                     //ARRAY
/*
let marks = [35,45,80,77];
const fruits = ['apple','orange','banana'];
const mixed = ['str',44,[3,4]];
const arr = new Array(23,34,54,'hello world');

console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(marks);
console.log(Array.isArray('arr'));//false
console.log(Array.isArray(arr));//true

arr[0] = 'USA';
console.log(arr);

let val = arr[3];
console.log(val);

console.log(marks);
let value = marks.indexOf(80);
console.log(value);

//mutating or modifying arrays
//push
marks.push(100);
console.log(marks)

//unshift
marks.unshift(110);
console.log(marks);

//pop
marks.pop();
console.log(marks);

//shift
marks.shift()
console.log(marks);

//splice
marks.splice(1,2);
console.log(marks);

//reverse
marks.reverse();
console.log(marks);

//concat Array
let marks2 = [35,45,55];
marks = marks.concat(marks2);
console.log(marks);
*/

                         //objects
//we use object when we have key pair value
/*

let myObj = {
    name: "adnan",
    'my class': "class 6",
    isActive: true,
    marks: [1,2,3,55,6]
}
console.log(myObj['my class']);
console.log(myObj.marks);

*/





































 


