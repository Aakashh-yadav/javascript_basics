// // map
// arr=[55,87,41,62]
// let a=arr.map((ele ,index,arr)=>{
//     console.log(ele,index);

//     return ele*2;
// })
// console.log(a);
// console.log(arr);

// // for each
// arr.forEach((ele) => {
//     console.log(ele*2);    
// });
// // 
// // filter
//  arr=[55,87,41,62,8,6,51,2]
//  var a =arr.filter((a)=>{
//     return a<50;
//  })
//  console.log(a);
// // Reduce 
// arr=[1,2,3,5,6]
// var a=arr.reduce((acc,ele)=>{
//     return acc+ele;
// },0)
// console.log(a);

let students = [
    { name: "Rahul", roll: 20 },
    { name: "skl", roll: 80 },
    { name: "rks", roll: 50 },
    { name: "Rahul", roll: 30 },
]
// const r = students.filter((st) => st.roll > 30);
// console.log(r);

// const sum = students.reduce((acc, curr) => acc + curr.roll, 0);
// console.log(sum);
//return name of the students whose roll number is above 50
// const names = students.filter((rl) => rl.roll > 30).map((rl)=> rl.name);;
// console.log(names);
//grace marks question 
const num = students.map((st) => {
    if (st.roll < 50) {
        st.roll += 20;
    }
    return st;
}).filter((st) => st.marks > 50);
console.log(num);
