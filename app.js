var arr1=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


for (var i = 0; i < arr1.length; i++) {
    var a=""
    for (var j = 0; j < arr1[i].length; j++) {
        a+= arr1[i][j]
        
    }
    console.log(a)
    
}



for (var i = 0; i < arr1.length; i++){
    var a=""
    for (var j = 0; j < arr1[i].length; j++) {
        a+= arr1[j][i]
        
        
        
    }
    
    console.log(a)
    
}

var sum=0
var count=0
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) {
        sum+=arr1[i][j]
        count++
    }
    
}
console.log("Sum of all numbers is: ",sum)
var avg=sum/count
console.log("Avg of all numbers are: ",avg)


var max=0
var min=100000000
for (var i = 0; i < arr1.length; i++) {
    var a=""
    for (var j = 0; j < arr1[i].length; j++) {
        if(arr1[i][j]>max){
            max=arr1[i][j]
        }
        if(arr1[i][j]<min){
            min=arr1[i][j]
        }
        if(arr1[i][j]%2==0){
            countEven++
        }
        
        
    }
    
    
}
console.log("Largest number in the array is: ",max)
console.log("Smallest number in the array is: ",min)



var countEven=0
var countOdd=0
for (var i = 0; i < arr1.length; i++) {
    var a=""
    for (var j = 0; j < arr1[i].length; j++) {
        if(arr1[i][j]%2==0){
            countEven++
        }
        else{
            countOdd++
        }
        
        
    }
    
    
}
// console.log("Total even numbers are: ",countEven)
// console.log("Total odd numbers are: ",countOdd)


// arr2=[
//     [-1,4,6],
//     [-5,-2,8],
//     [7,-9,3]
// ]
// for (var i = 0; i < arr1.length; i++) {
//     var a=""
//     for (var j = 0; j < arr1[i].length; j++) {
//         if(arr2[i][j]<0){
//             arr2[i][j]=0
//         }
        
        
//     }
    
    
// }
// console.log("New array is: ")
// console.log(arr2)

// var arr3=[
//     [4,5,12],
//     [15,43,25],
//     [80,14,10]
// ]
// var countNum=0
// for (var i = 0; i < arr3.length; i++) {
//     var a=""
//     for (var j = 0; j < arr3[i].length; j++) {
//         if(arr3[i][j]%5==0){
//             countNum++
//         }
        
        
//     }
    
    
// }
// console.log("Total numbers that are divisible by 5 are: ",countNum)

