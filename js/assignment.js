"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];
/*  Create a function called findSmallestNumber. This function should take in the array, myNumbers. Loop through the array and return the smallest number.
Create a function called findLargestNumber. This function should take in the array, myNumbers. Loop through the array and return the largest number.
Create a function called findAverage. This function should take in the array, myNumbers. Loop through the array and return the average.
Create the remaining functionality to render your answer */


let smallest = (myNumbers[0]);
function findSmallestNumber() {
    for (let i = 0; i < myNumbersnumbers.length; i++) {
 if (myNumbers[i] < smallest) {
smallest = myNumbers[i];
 } }
 console.log(smallest)
}

function findLargestNumber() {
    let largest = (myNumbers[0]);
        for (let i = 0; i < myNumbers.length; i++) {
            if (myNumbers[i] > largest) {
                largest = myNumbers[i]
            }
            
        }
     console.log(largest)
}

function findAverage () {
    
    let sum = 0;
    for (let num of myNumbers) {
        sum += num;
    }
    
    let average = sum / grades.length;
    console.log(average);

}

function render() {
    // Call the created functions
findSmallestNumber();
findLargestNumber();
findAverage();
}

submissionBtn.addEventListener("click", function () {
    render();
});