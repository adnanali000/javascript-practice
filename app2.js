//class 31 es6 inheritence

/*
class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan() {
        return `I am ${this.name} and this is the best`;
    }

    joiningYear() {
        return 2000 - this.experience;
    }

    static add(a, b) {
        return a + b;
    }

}

// let adnan = new Employee('adnan', 4, 'Division');
// console.log(adnan);
// console.log(Employee.add(44,5));

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {

        super(givenName, givenExperience, givenDivision);

        this.language = language;
        this.github = github;


    }

    favouriteLanguage() {
        if (this.language == 'python') {
            return 'python';
        }
        else {
            return 'javascript';
        }
    }

    static multiply(a,b){
        return a*b;
    }
}


let elen = new Programmer('Elen','10','Lays','do','elen musk');

console.log(elen);
console.log(elen.favouriteLanguage());
console.log(Programmer.multiply(6,7));

*/

           //class 32 excercise 
/*

class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookname,username){
        if(this.issuedBooks[bookname] == undefined){
        this.issuedBooks[bookname] = username;
    }
    else{
        console.log('already issued');
    }
    }
    returnBook(returnBookName){
       delete this.issuedBooks[returnBookName];
    }
}

let books = new Library(['harry poter','awaken the giant','me before you']);
console.log(books);
console.log(books.getBookList());
console.log(books.issueBook('harry poter','adnan'))
console.log(books.issueBook('harry poter','adnan'))
console.log(books.issueBook('harry poter','imran'))
console.log(books.issueBook('me before you','adnan'))
console.log(books.returnBook('harry poter'))
console.log(books.issueBook('harry poter','imran'))
console.log(books.issuedBooks);

*/

            //class 34 Asynchronous Programming


// setTimeout(() => {
//     for (let index = 1; index < 20; index++) {
//         const element = index;
//         console.log("this is my loop",index);
        
//     }
// }, 100);
// console.log("Asynchronous");



          //37 callback function

// const students = [
//     {name:'adnan',subject:'javascript'},
//     {name:'imran',subject:'javascript'}
// ]


// function enrollStudent(student,callback){
//     setTimeout(function(){
//         students.push(student);
//         console.log("student has been enrolled")
//         callback();
//     }, 3000);

// }

// function getStudents(){
//     setTimeout(function(){
//         let str = ""
//         students.forEach(function(element){
//             str += `<li>${element.name}</li>`
//         })

//         document.getElementById('students').innerHTML = str
//         console.log("students have been fetched")

//     }, 1000);

// }

// let newStudent = {name:'kami',subject:'python'}
// enrollStudent(newStudent,getStudents);



          //class 38 Excercise 5

//you have to pretend word api which will contain an object and you have to print defination of all the result of that api.
//You have to print it in the dom.If you are using bootstrap then its a plus


// let word = document.getElementById('word');

// let searchBtn = document.getElementById('searchBtn');

// searchBtn.addEventListener('click',function(){
//     console.log(word.value);
//     word.value = "";

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET','https://wordsapiv1.p.mashape.com/words/example',true)

//     xhr.onload = function(){
//         if(this.status === 200){
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);

//         }
//         else{
//             console.log('some error occur')
//         }

//     }
//     xhr.send();
// })


            //chp 39 promises catch and than

//  function fun1() {
//      return new Promise(function(resolve,reject) {
//          setTimeout(() => {

//             let error = true
//             if(!error){
//                 console.log('Function: Your promise has been resolved')
//                 resolve();
//             }
//             else{
//                 console.log('Function: Your promise has not been resolved')
//                 reject();
//             }
             
//          }, 2000);
         
//      })
     
//  }           

//  fun1().then(function(){
//      console.log('Adnan: Thanks for resolving')
//  }).catch(function(){
//     console.log('Adnan: oops ');
//  })
     
 

// let emp = [
//     {Name:'Adnan',language:'Javascript'},
//     {Name:'jaffer',language:'Javascript'}

// ]
    
// function enrollEmp(employee){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             emp.push(employee);
//             console.log('Employee has been enrolled');
//             let error = false
//             if(!error){
//             resolve()
//             }
//             else{
//                 reject();
//             }
//         }, 3000);
//     })
   

// }

// function getEmp(){
//     setTimeout(() => {
        
//         let str = "";
//         emp.forEach(function(element){
//             str += `<li>${element.Name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log('Student has been fetched')
//     }, 1000);

// }

// let newEmp = {Name:'ali',language:'Python'}
// enrollEmp(newEmp).then(function(){
//     getEmp();

// }).catch(function(){
//     console.log('Some error occured');
// })



           //class 40 Arrow function

           //normal function
// const adnan = function(){
//     console.log('hello world')
// }
// adnan()

//arrow function

// const adnan = ()=>{
//     console.log('hello world')
// }
// adnan();

// //function returning something
// //one line do not require braces and return. it will return automatically

// const greet = ()=> 'good morning';
// console.log(greet());

// //we use bracket if we want to use object in single line
// const name = ()=> ({Name:'adnan'});
// console.log(name());

// //return string using arrow function in single line
// //single argument
// const language = lang => lang;
// console.log(language('javascript'))


                //    class 42 fetch api

 /*               
//button
 let mybtn = document.getElementById('mybtn');      

//button
let content = document.getElementById('content');

function getData(){
    console.log('started getdata')
    url = 'adnan.txt';
    fetch(url).then((response)=>{
        console.log('inside first then')
        return response.text();
    }).then((data)=>{
        console.log('inside second then')
        console.log(data);
    })
}

console.log('before running data')
getData();
console.log('after running data')


//get json data through fetch api

function getJsonData(){
    url = 'https://api.github.com/users';
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
getJsonData();


//POST REQUEST

function postJsonData(){
    url = 'http://dummy.restapiexample.com/api/v1/create';
    data = '{"name":"hello world","salary":"123","age":"23"}'
    param = {
        method:'post',
        headers: {
            "content-Type":'application/json'
        },
        body: data

        //if data is a object than use json.stringify(data)
        //body:JSON.stringify(data)
    }

    fetch(url,param).then(response=>response.json())
    .then(data=>console.log(data))
}
postJsonData();

*/

             //class 43 assync / await
/*
async function getData(){
    console.log('inside get data')
    const response = await fetch('https://api.github.com/users');
    console.log('before respnse')
    const users = await response.json();
    console.log('user resolved')
    return users
}

console.log('before calling getData');
let x = getData();
console.log('after calling the getData');
console.log(x);
x.then(data => console.log(data));
console.log('last line of this js file');
*/


        //class 44 error handling

//pretend this is coming from a server as response
/*
let a = 'adnan bhai';
a = undefined
if(a != undefined){
    throw new Error('this is not undefined')
}else{
    console.log('this is undefined');
    
}

try {
       //abcncjejje
       console.log('we are inside try block')
       functionAbc();
} catch (error) {
    console.log('are you okay')
    console.log(error.name)
    console.log(error.message)

}finally {
    console.log('finally block run')
}
*/

 
           //Excercise 5 solution

           /*
let myJson = `{
    "word": "example",
    "results": [
      {
        "definition": "a representative form or pattern",
        "partOfSpeech": "noun",
        "synonyms": [
          "model"
        ],
        "typeOf": [
          "representation",
          "internal representation",
          "mental representation"
        ],
        "hasTypes": [
          "prefiguration",
          "archetype",
          "epitome",
          "guide",
          "holotype",
          "image",
          "loadstar",
          "lodestar",
          "microcosm",
          "original",
          "paradigm",
          "pilot",
          "prototype",
          "template",
          "templet",
          "type specimen"
        ],
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "I profited from his example"
        ]
      },
      {
        "definition": "something to be imitated",
        "partOfSpeech": "noun",
        "synonyms": [
          "exemplar",
          "good example",
          "model"
        ],
        "typeOf": [
          "ideal"
        ],
        "hasTypes": [
          "pacemaker",
          "pattern",
          "beauty",
          "prodigy",
          "beaut",
          "pacesetter"
        ],
        "derivation": [
          "exemplify",
          "exemplary"
        ]
      },
      {
        "definition": "an occurrence of something",
        "partOfSpeech": "noun",
        "synonyms": [
          "case",
          "instance"
        ],
        "typeOf": [
          "happening",
          "natural event",
          "occurrence",
          "occurrent"
        ],
        "hasTypes": [
          "clip",
          "mortification",
          "piece",
          "time",
          "humiliation",
          "bit"
        ],
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "but there is always the famous example of the Smiths"
        ]
      },
      {
        "definition": "an item of information that is typical of a class or group",
        "partOfSpeech": "noun",
        "synonyms": [
          "illustration",
          "instance",
          "representative"
        ],
        "typeOf": [
          "information"
        ],
        "hasTypes": [
          "excuse",
          "apology",
          "specimen",
          "case in point",
          "sample",
          "exception",
          "quintessence",
          "precedent"
        ],
        "derivation": [
          "exemplify",
          "exemplary"
        ],
        "examples": [
          "this patient provides a typical example of the syndrome",
          "there is an example on page 10"
        ]
      },
      {
        "definition": "punishment intended as a warning to others",
        "partOfSpeech": "noun",
        "synonyms": [
          "deterrent example",
          "lesson",
          "object lesson"
        ],
        "typeOf": [
          "monition",
          "admonition",
          "word of advice",
          "warning"
        ],
        "derivation": [
          "exemplary"
        ],
        "examples": [
          "they decided to make an example of him"
        ]
      },
      {
        "definition": "a task performed or problem solved in order to develop skill or understanding",
        "partOfSpeech": "noun",
        "synonyms": [
          "exercise"
        ],
        "typeOf": [
          "lesson"
        ],
        "examples": [
          "you must work the examples at the end of each chapter in the textbook"
        ]
      }
    ],
    "syllables": {
      "count": 3,
      "list": [
        "ex",
        "am",
        "ple"
      ]
    },
    "pronunciation": {
      "all": "ɪɡ'zæmpəl"
    },
    "frequency": 4.67
  }`


  let myObj = JSON.parse(myJson);
  console.log('The object is : ',myObj);
  console.log('The result in the object : ',myObj['results']);

let meanings = document.getElementById('meanings');
meanings.addEventListener('click',()=>{
    console.log('someone clicked meanings')

    populate();
})

function populate() {
    let results = myObj['results'];
    let html = "";
    results.forEach(element => {
        html += `<li>One of the definitions of example is ${element.definition}</li>`;
    });
    let defs = document.getElementById('defs');
    defs.innerHTML = html;
}
*/

        //  class 46 Regular expression

//let reg = /hello/; // regular expression literal
//reg = /hello/g; //global expression
//reg = /hello/i; //i mean case insensitive

//console.log(reg);
//console.log(reg.source);

//let str = "Welome to hello world and hello world";

//function to match the value of regular expression
//1. exec() : this function return the array if value found and null if value not found

//let result = reg.exec(str);
//console.log(result)
//console.log(result.input)
//console.log(result.index)


// result = reg.exec(str);
// console.log(result)
// result = reg.exec(str);
// console.log(result)

//2.test() return true if value found or false if not found

//let result2 = reg.test(str);
//console.log(result2);

//3 match() return an array of result or null
//let result3 = reg.match(str); //this is wrong way

//let result3 = str.match(reg); //this is right way

//console.log(result3);


//4 search() return index of first if match else -1

//let result4 = str.search(reg);
//console.log(result4);



//5 replace() return new string with all replacement if global flag given otherwise first match will be replaced

//let result5 = str.replace(reg,'hey');
//console.log(result5);


         //class 47 metacharacters
/*
let nameRegex = /adnan/;
//metacharacters symbol
nameRegex = /^adn/; //^ means expression will match if starts with

nameRegex = /an$/; //$ at the string means expression will match if ends with

nameRegex = /a.nan/; //. means expression will match any one character

nameRegex = /a*nan/; //* means expression will match 0 or more characters

nameRegex = /ad?nan?n/; //? means expression will match 0 or more characters

nameRegex = /a\*nan/; //\* means expression will match the given value of back slash



let val = 'adnan is a*nan';
let ans = nameRegex.exec(val);
console.log(ans);
  
if (nameRegex.test(val)){
  console.log(`The string ${val} matches the expression ${nameRegex.source}`);
  
}else{
  console.log(`The string ${val} does not match the expression ${nameRegex.source}`);

}

*/

























