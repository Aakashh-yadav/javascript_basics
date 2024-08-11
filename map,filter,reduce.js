// map
arr=[55,87,41,62]
let a=arr.map((ele ,index,arr)=>{
    console.log(ele,index);
    
    return ele*2;
})
console.log(a);
console.log(arr);

// for each
arr.forEach((ele) => {
    console.log(ele*2);    
});
// 
// filter
 arr=[55,87,41,62,8,6,51,2]
 var a =arr.filter((a)=>{
    return a<50;
 })
 console.log(a);
// Reduce 
arr=[1,2,3,5,6]
var a=arr.reduce((acc,ele)=>{
    return acc+ele;
},0)
console.log(a);