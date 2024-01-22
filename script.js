

var x = 10; 
console.log(x);
let y =20;
console.log(y)
const z=30;
console.log(z);
let name='welcome to Turkey';
console.log(name)
let isStudent=true;
let hasjob=false;
function exampleVar(){
    let y=20
    console.log(y);
}
function exampleConst(){
    const z=30;
    
    console.log(z);
}
exampleConst();
function greet(name){
    console.log(`Hello,${name}!`);
}
greet(`Bekir`);
//Outputs: Hello, Bekir!
const add =function (a,b){
    return a+b;
};
console.log(add(5,3));
//Outputs:8
let basePrice =50;
let discount= 0.2;
let finalPrice = basePrice - (basePrice * discount);

// Declaring an array 
let fruits = ['Apple', 'banana', 'orange'];

// Accessing elements 
console.log(fruits[0]); // Output: 'apple'
// Modifying an array
fruits.push('Grapes'); // adds 'grapes' to the end
fruits.pop();// Removes the last element
// Declaring an object
let person ={
    firstname :'bekir',
    lastname: 'bekirgil',
    age:30,
    hobbies: ['reading','travelling'],
    address:{
        stret:'123 main st',
        city:'anytown',
        country: 'usa'
    }
}
// accessing properties 
console.log(person.firstname);// Output: 'jhon'
console.log(person.address.city);// Output:'anytown'
// Modifyng an object
person.age=31;

person.hobbies.push('cooking');
for (let i= 0; i<5;i++){
    console.log(i);
} 
// Declaring an array 
let fruit =['apple','banana','orange','mango'];
// Iterating through an array 
for (let i = 0; i< fruit.length;i++) {
    console.log(fruit[i]);
}
// Accessing properties
console.log(person.firstname);// Output:'jhon'
console.log(person.address.city);// Output: 'anytown'
// Modifyng an object
person.age=31;
person.hobbies.push('cooking');
// Iterating through object properties
for (let key in person){
    console.log(key+':'+person[key]);
}
let temperature=25 ;
if (temperature>20) {
    console.log('its a warm day!');
}
let hour=18;
if (hour<12){
    console.log('good morning!');

} else{
    console.log('good afternoon!');
}
let age =25;
if(age>=18){
    if(age<21) {
        console.log('birşeyler iç');
    }  else{
        console.log('birşeyler takip et');
    } 
}
































