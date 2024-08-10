//Basic example of curring 
// function add(a){
//     return function (b){
//         return a + b
//     }
// }
// let res=add(5)(6);
// console.log(res);
//advance example of currying 
let user_obj= {
    name:"ak",
    age:25
}
function k(obj){
    return function(k)
    {
       return obj[this.age]
    }
}
let res=k(user_obj);
 console.log(res); 
