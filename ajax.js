// let fetchBtn =  document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click',buttonClickHandler)

// function buttonClickHandler() {
//     console.log('you have clicked the fetch buton')
//     //instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     //open the object GET request

//     // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)

//     //open the object POST request
//     xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)

//     xhr.getResponseHeader('content-type','application/json')


//     //what to do on progress (optional)
//     xhr.onprogress = function() {
//         console.log('On progress');
//     }

//     //what to do when response is ready
//     xhr.onload = function() {
//         if(this.status === 200){
//         console.log(this.responseText);
//     }
//     else{
//         console.error('some error occured')
//     }


//     }

//     //send the request
//     //get request

//     //xhr.send();

//     //post request

//     params = `{"name":"test123","salary":"123","age":"23"}`;
//     xhr.send(params);

//     console.log('we are done')

// }


//GET DATA FROM DUMMY DATA

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log("You have clicked the populate button");

    //initiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object for GET REQUEST
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)

    //what to do when response is ready

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj)
            let list = document.getElementById('list');
            str = "";

            for (key in obj) {
                str += `<li>${obj[key].employee_name}</li>`;
            }

            list.innerHTML = str;
        }
        else {
            console.log('some error occured');
        }

    }

    xhr.send();
    console.log('we are done')


}






























