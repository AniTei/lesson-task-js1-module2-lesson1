// this is for fork





/* ### Question 1

Create a function called `receivingFunction` which accepts one argument. OK

Inside this function check if the argument is a function, and if it is, call the function. BUT THERE ISNT ANY ARGUMENT YET, 

Create another function called `callbackFunction` which logs the string: "I am a callback function".

Call `receivingFunction` and pass `callbackFunction` into it as an argument.
 */

function receivingFunction(oneArgument) {
    console.log(typeof oneArgument);
}

// I dont think I was able to check if the argument is a function? or was I ? 
//bacause it says it is a string, so that means no, 
//so maybe they wanted me to see that the next input /second function actually was a function?

receivingFunction("HELLO");

function callbackFunction (placeHolder) {
    console.log(placeHolder);
}

callbackFunction("I am the second function")

receivingFunction(callbackFunction);

///////////////////
// Question 1
/* 
function receivingFunction(callback) {
    if (typeof callback === "function") {
        callback();
    } else {
        console.log("The argument is not a function");
    }
}

// so it look a little like I did it, but they made messeges

const callbackFunction = function () {
    console.log("I am a callback function");
};

//why did they declare a new variable? dont need that? or for being "proper?"

receivingFunction(callbackFunction);
 */




/* ### Question 2

Convert the following `for` loop to a `forEach` loop.

```js
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

for (let i = 0; i < prizes.length; i++) {
    console.log(`Prize ${i + 1}: ${prizes[i]}`);
}
``` */
//array of items
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

//for loop
/* for (let i = 0; i < prizes.length; i++) {
    console.log(`Prize ${i + 1}: ${prizes[i]}`);
} */

// it's a prize, as in winning

prizes.forEach (function (winner, tall){
    console.log(`Prize ${tall +1 }: ${winner}`);
    
})

//JEG KLARTE DET !
//MÅTTE SE PÅ VIDEOEN I LEKSJONEN, MEN IKKE FASIT :D
//do something `Prize ${i + 1}: ${prizes[i]}`



///////////////////
// Question 2
/* const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function (prize, index) {
    console.log(`Prize ${index + 1}: ${prize}`);
}); */

//veldig bra, helt likt jo







/* 
### Question 3

Write code that waits 5 seconds before logging the string: OK
`I waited 5 seconds before executing`. OK
Store the amount of seconds (5 initially) in a variable so it can be easily changed.
 */

const time = 5000;

setTimeout (function () {
    console.log("I waited 5 seconds before executing");
}, time)


// den kommer etter 5 sek, men som undefined Hmmm
// jeg trengte visst ikke parameter i denne, tok det bort, og satt stringen rett inn i console.log

// lagde variable for amount of time, 
//first put it under the function, but the console, told me it har to be above the refernce, makes sense, 
//also happy I remembered to use let

/* 
///////////////////
// Question 3

const numberOfSeconds = 5;

function logMessage() {
    console.log(`I waited ${numberOfSeconds} seconds before executing`);
}

setTimeout(logMessage, numberOfSeconds * 1000); // the seond argument must be in milliseconds
 */

//why did they make a seperate function, in addition to the setTimeout-method?





/* 
### Question 4

Write code that logs the numbers 1 to 4 every 1.5 seconds and then stops.
 */

let trala = 0;

const containedInterval = setInterval  (function (){
  
    trala++;
    console.log (trala);
    if (trala === 4) {
        clearInterval (containedInterval)
    };


}, 1500);

// it logs a string 
//it logs the variable that is a number
//now it logs the trala variable every two seconds, and adds one at the time
// how to I clear it when i comes to 4, intervalId?
// goes to look at lesson video

// use an if statement
// I didnt remember how to write an if statement, if(){};
//to use clearInterval in if : if(){clearInterval (name of variable that setInterval-method is inside)};

//Jeg klarte det ! med hjelp fra video,
// nå skal jeg se finne fasiten


/* 
///////////////////
// Question 4

const interval = 1500; also why
let count = 0; OK
const limit = 4; WHY, bc easier changeable?

function logNumber() {
    count++; OK

    console.log(count); OK

    if (count === limit) { OK, mostly same, except limit
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(logNumber, interval); 

//what does this last line even mean, can you use a setInterval-method wo function
//yes well, bc logNumber is a function
// and intervall/1500 is the second parameter/argument
//It all COULD be wrapped up in the same setInterval, 
//what is best practice? make it compact or make it seperate, end easier edited? 
*/


// maybe it is very good to take whatever might be changed and put it outside a function/method?
// is it considered better practice?
