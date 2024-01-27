
           
let arr = [10, 24, 56, 72, -10, -88, 100, 564,]

// odd = 24 72 -88 564

let sum =0
let count =0
let sum1 = arr.map(function(ele,ind){

    if(ind%2!=0){
        sum+=ele
        count++
    }
    return sum

})
console.log(sum/count)


// let arr1=[0,1,2,3,4,5,6,7]

// let odd = arr1.filter(function(ele){

//     return ele%2!=0
// })
// console.log(odd)

