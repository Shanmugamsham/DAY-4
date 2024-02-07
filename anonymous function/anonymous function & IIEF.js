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


//IIEF:

// (function(arr){
//   for(var i=0;i<arr.length;i++){
//     result=arr[i]
//     if(result%2!=0){
//       console.log(result)
//     }
//   }

// })([1,2,3,4,5,6])



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
