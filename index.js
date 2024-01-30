
//**************************************************     Assignment 1: Array Operations         *********************************************************
//Objective: Practice adding, removing, and updating values in arrays.

/*
// creating empty array called fruits.
const fruits = [];

//Adding values to the array.
fruits[0] = 'apple';
fruits[1] = 'banana';
fruits[2] = 'orange';

//Removing first fruit from the array 
fruits.shift();
//console.log(fruits);

//Adding grape to the end of the array 
fruits.push('grape');
//console.log(fruits);

//Updating te second fruit in the with 'pear'
fruits[1] = 'pear';
console.log(fruits);
*/




//******************************************************     Assignment 2: Object Operations       ************************************************
//Objective: Practice adding, removing, and updating values in objects.


/*
//creating an empty object
let person = {};

//adding properties to the objects.
person = {
    name:"john",
    age:30,
    city:"NewYork"
}

//Removing age property from the person object
delete person.age;

//Adding new property 'job'
person.job = "Engineer"

//Update the city property
person.city = "San Fransisco";
console.log(person);
*/






//***********************************************************       Assignment 3: Array of Objects Operations         **************************************************
//Objective: Practice adding, removing, and updating values in an array of objects.

//Creating empty Array
//using const is best practice but we cant use it while creating empty array
let cars = [];

//adding three cars objects
cars = [
    {make:"toyota", model:"camry", year:2018},
    {make:"Honda", model:"Amaze", year:2020},
    {make:"Fiat", model:"Linea", year:2014},
]

//Removing first cars object from the array.
delete cars[0];

//add new object to the array
cars.push({make:"Honda",model:"Civic",year:"2020"});

//updating model property of the second car object in the array to "accord"
cars[1].model = "Accord";

//printing final result
console.log(cars);

