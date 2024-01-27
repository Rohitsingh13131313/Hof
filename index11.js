
let arr = [3,4,5,6,7]

let bag = ""
arr.forEach(function(ele){

    if(ele%2==1){
         bag+=ele+" "
    }
    else if(ele%2==0){
        bag+="-"+" "
    
    }
    
    
        
})
console.log(bag)
