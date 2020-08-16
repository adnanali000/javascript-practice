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






























 


