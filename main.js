// ***************           Question #1
//Write a function that takes a string and an array of strings ( in this example dog_names) 
//and checks if one of the list members (dog names) is in the string . 
//Return an array of the dog names found in the array
// var dogNames = ["Max","Fido","Gizmo","Nala"]

//Test Cases
// var testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']

//var testString2 = "My Dog is fast, her name is Tippi"
//Expect []

// var testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']
 
const dogString = "Hello, my dog is Max, and they have purple eyes!"   
const dogs = ["Max","Fido","Gizmo","Nala"]
   

  function dogNames(){
    const dogNames = [] 
for(const name of dogs){   
    if(dogString.includes(name)){ 
        dogNames.push(name)
    }
}
    return dogNames;  
}
const dogs2 = dogNames(dogString,dogs)   
console.log(dogs2)  






//*********************************QUESTION 2
//Write a function using a for loop to convert an array of numbers from inches to feet.
//var heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expects:
//[ 5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25 ]

//const inches = [66, 64, 60, 52, 72, 80, 51]
//const feet = ConvertToft(inches)



// *************************Question #3

//Using a for loop (or for extra challenge the Ternary Operator and Map), create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

//Example:
//var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// Expects:
//'Leonardo is eating pizza',
//'Michelangelo is eating pizza',
//Donatello is eating pizza',
//Raphael is being rude'


const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]


function ninjaTurtles(){
    for(let i =0; i < tmnt.length; i++){
        if (tmnt[i].slice(length - 1) == 'o'){
            console.log(`${tmnt[i]} is eating pizza`)
        } else{
            console.log(`${tmnt[i]} is being rude`)
        }
}}
ninjaTurtles()
        
const NTurtles = tmnt.map(nt => `${nt} is eating pizza`)
console.log(NTurtles)


 
//Question #4

//Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.

//Example:

//var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// Expects
// 234125


const largest = () => {
    const numbers = [123, 5436, 45784, 1234, 34, 65, 234125, 645, 3452, 13216, 49]
    let num1 = 0
        for(let i = 0; i < number.length; i++){
            if (numbers[i] > num1) { 
                num1 = numbers[i]
                console.log(num1)
            }}}




