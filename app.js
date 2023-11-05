document.write("<h2> Safdar Siddiqui CCO 9089498 </h2>");
// --------------- TASK 01 ---------------

document.write("<h3> Task 01 </h3>");

let array=[["A","B","C","D"], [1,2,3,4], ["a","b","c","d"]];
for(var a=0; a<array.length; a++){
    document.write(array[a].join(" "), "<br>")
}

document.write("<br>");

document.write("<br>");

// --------------- TASK 02 ---------------

document.write("<h3> Task 02 </h3>");

let arr2=[[0,1,2,3], [1,0,1,2], [2,1,0,1]];
for(var a=0; a<arr2.length; a++){
    document.write(arr2[a].join(" "), "<br>")
}

document.write("<br>");

// --------------- TASK 03 ---------------

document.write("<h3> Task 03 </h3>");

for(var a=1; a<=10; a++){
    document.write(a);
    document.write("<br>")
}
document.write("<br>");

// --------------- TASK 04 ---------------

document.write("<h3> Task 04 </h3>");

let table= +prompt("Enter a Number of Multiplication Table");
let endPoint = +prompt("Enter A Number of End of Table");

for(var i=1; i<=endPoint; i++){
    document.write(table + " x " + i + " = " + i*table);
    document.write("<br>")
}

document.write("<br>");

// --------------- TASK 05 ---------------

document.write("<h3> Task 05 </h3>");

var fruits= ["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0; i<fruits.length; i++){
    document.write("Element at Index " + i + " is " + fruits[i]);
    document.write("<br>")
}

document.write("<br>");

// --------------- TASK 06 ---------------

document.write("<h3> Task 06 </h3>");

document.write("<b> Counting: </b>", "<br>");

for(var i=1; i<=15; i++){
    document.write(i, ", ");
}

document.write("<br> <br>");
document.write("<b> Reverse Counting: </b>", "<br>");

for(var i=15; i>=1; i--){
    document.write(i, ", ");
}

document.write("<br> <br>");
document.write("<b> Even: </b>", "<br>");

for(var i=0; i<=20; i+=2){
    document.write(i, ", ");
}

document.write("<br> <br>");
document.write("<b> Odd: </b>", "<br>");

for(var i=1; i<=20; i+=2){
    document.write(i, ", ");
}

document.write("<br> <br>");
document.write("<b> Series: </b>", "<br>");

for(var i=2; i<=20; i+=2){
    document.write(i, "k, ");
}

document.write("<br>");

// --------------- TASK 07 ---------------

document.write("<h3> Task 07 </h3>");

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/mam?");
var available;

for(var i=0; i<items.length; i++){
    if(userInput === items[i]){
        available="yes";
        break;
    }
    // else{
    //     available="no";
    // }
}
if(available==="yes"){
    document.write(userInput + " is/are <b> available </b> at index " + i + " in our bakery");
}
else{
    document.write("We are sorry. " + userInput + " is/are <b> not available </b> in our bakery.");
}

document.write("<br>");

// --------------- TASK 08 ---------------

document.write("<h3> Task 08 </h3>");

var arr=[5, 80, 99, 85, 10];
var largest=arr[0];
// var smallest=arr[0];
for(var i=1; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
    // else if(arr[i] < smallest){
    //     smallest = arr[i];
    // }
}
document.write("Array Items: " + arr + "<br>");
document.write(`Largest value is ${largest}`);

// document.write("<br> <br>");

// document.write("Array Items: " + arr + "<br>");
// document.write(`Smallest value is ${smallest}`);


document.write("<br>");

// --------------- TASK 09 ---------------

document.write("<h3> Task 09 </h3>");

var arr=[25, 18, 29, 45, 80];
// var largest=arr[0];
var smallest=arr[0];
for(var i=1; i<arr.length; i++){
    // if(arr[i] > largest){
    //     largest = arr[i];
    // }
    if(arr[i] < smallest){
        smallest = arr[i];
    }
}
// document.write("Array Items: " + arr + "<br>");
// document.write(`Largest value is ${largest}`);

// document.write("<br> <br>");

document.write("Array Items: " + arr + "<br>");
document.write(`Smallest value is ${smallest}`);


document.write("<br>");

// --------------- TASK 10 ---------------

document.write("<h3> Task 10 </h3>");

for(var i=5; i<=100; i+=5){
    document.write(i, ", ")
}


// --------------- Additional Work -----------

// var count=0
// function counter(){
//     count++;
//     document.getElementById("myCount").innerHTML= count;
// }
// window.setInterval("counter()", 100)