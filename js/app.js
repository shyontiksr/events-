/**
 *      ES6
 * 
 *  var can be replaced by 'let' and 'const'
 * 
 *  var and let can be changed. const cannot change 
 * 
 *  use const when you do not want to change the value later..its permanent 
 * 
 *  functions
 * 
 *      DECLARATIVE FUNCTION
 * function functionName() {
 *      do stuff
 *  }
 * 
 *     ARROW FUNCTION  --implied return 
 *  const funcName =()=> {
 *      do stuff
 *  }
 * 
 * 
 *  TERNARIES - diff way of writing if statements 
 * 
 *  if (condition) {
 *      do stuff
 *  } else {
 *  do something else 
 *  }
 * 
 * 
 *  condition ? do stuff : do something else  
 * 
 */


//if function does more than one thing use then {}
// const foo =()=> { 
//     let count = 6;
//     console.log(count);
// }
// foo();


// let baz = 7;

// // if (baz == 8) {
// //     console.log(baz);
// // } else {
// //     console.log('This is not right');
// // }

//         //same as ..

// baz == 8 ? console.log(baz) : null;
// baz == 8 ? console.log(baz) : console.log('This is not right');


const submitBtn = document.getElementById('submitBtn');

let data = {};

const subscribeUser =()=> {

// when doing a form make sure for have a value="" //
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const year = document.getElementById('dob').value.slice(0, 4);
    //console.log(year);    
    const month = document.getElementById('dob').value.slice(5, 7);
    //console.log(month);   
    const date = document.getElementById('dob').value.slice(8);
    //console.log(date); 
    
    const planType = document.querySelector('input[name=planType]:checked').value;
    console.log(planType);

    data.firstName = fName;
    data.lastName = lName;
    data.email = email;
    data.month = month;
    data.year = year;
    data.date = date;
    data.planType = planType;

    console.log(data);

}

const alertUser =()=> alert('Please agree to terms and conditions');



//console.log(submitBtn);
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    const terms = document.getElementById('terms');

    terms.checked ? subscribeUser() : alertUser(); // callback function 


})



