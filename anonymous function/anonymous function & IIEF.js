//anonymous function & IIFE

// A//Print odd numbers in an array

// let odd=function(...arr){

//   output=[]
//   for(var i=0;i<arr.length;i++){
//     result=arr[i]
//     if(result%2!=0){
//       output.push(result)

//     }

//   }
//   return output

// }

// console.log(odd(1,2,3,4,5,6))






//b//Convert all the strings to title caps in a string array

//  let UPPER=function(str){
//   output=[]
//   str=str.toLowerCase().split("")
//   for(var i=0;i<str.length;i++){
//     str[i]=str[i].charAt(0).toUpperCase() +str[i].slice(1)
   
//    }
//    return str.join(" ")
//  }

//  console.log(UPPER("title"));

//IIEF:



//c//Sum of all numbers in an array

// let add=function(...arr){
//     sum=0 
//     for(var i=0;i<arr.length;i++){
//         result=+arr[i]
//         sum=sum+result
//     }
//     return sum
// }
// console.log(add[1,2,3,4,5,8])


// d Return all the prime numbers in an array

// let isPrime = function () {
//     let numbers = [8, 7, 22, 11, 16, 29]
//     for (var val of numbers) {
//         if (val % 2 === 0) {
//             continue;
//         }
//         console.log(val)
//     }
// }
// isPrime();


// e)Return all the palindromes in an array

// let arr1 = [];
// let palindromes = function () {
//     let arr = ["madam", "guru", "radar", "worst"]
//     for (let i in arr) {
//         if (arr[i].split("").reverse().join("") === arr[i]) {
//             arr1.push(arr[i]);
//         }
//     }
// };
// palindromes();
// console.log(arr1);







// f) Return median of two sorted arrays of same size

// getMedian = function (ar1, ar2, n) {
//     var i = 0; 
//     var m1 = -1, m2 = -1;

//     for (count = 0; count <= n; count++) {

//         if (i == n) {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
//         else if (j == n) {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
       
//         if (ar1[i] <= ar2[j]) {
//             m1 = m2; 
//             m2 = ar1[i];
//             i++;
//         }
//         else {
//             m1 = m2; 
//             m2 = ar2[j];
//             j++;
//         }
//     }

//     return (m1 + m2) / 2;
// }
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// if (n1 == n2) {
//     console.log("Median is " + getMedian(ar1, ar2, n1));
// }



//g Remove duplicates from an array



// let arr = ["shan", "mani", "kanna",
//           "shan", "appu", "adhava"];
 
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
 
// console.log(removeDuplicates(arr));





//H Rotate an array by k times

// let add=function(...arr){
//     sum=0
//     for(var i=0;i<arr.length;i++){
//         sum=sum+arr[i]

//     }
//     return sum;
// }

// console.log(add(5,10,25));
