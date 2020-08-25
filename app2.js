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


let students = [
    {name:"elen musk",owner:"tesla"},
    {name:"jeff bezof",owner:"amazon"}
]


function enrollMember(member,callback){
    setTimeout(function(){
        students.push(member)
        console.log("student enrolled");
        callback();
    },1000)
}

function getMembers(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(members){
            str += `<li>${members.name}</li>`
        });

        document.getElementById('students').innerHTML = str;
        console.log("student fetched")
        
    }, 3000);


}

let newMember = {name : "jack maa",owner:"ali baba"}
enrollMember(newMember,getMembers);
console.log(students);






















