// let a={
//     f_name:`aakash `,
//     l_name:`yadav`,
//     age: 20,

// const { b } = require("./call_by_value&reference");

   
    
    
// }

// let information= function(hometown){
//     console.log(this.f_name,this.l_name,this.age,hometown);
    
// }

// let z={
//     f_name:`aakashyy `,
//     l_name:`yadav`,
//     age: 20,    
// }
// information.call(z,"Bhiwani");
// information.apply(a,["rishikesh"]);
// // information.call(a);
// // information.call(a);
// // information.call(a);

// function sayHello(){
//    return `hello${this.name}`;
//   }
          
//   var obj = {name: "Sandy"};
          
//   console.log(sayHello.call(obj));
  //another value of the call function 

let obj_1={
    name : `ak`,
    age : 20,
   
  
}
function func(address,Country){
    return "hello "+this.name+this.age+address+Country;
}
let obj_2={
    name : ` ak1 `,
    age : 25

    }
    //by using call method 
    console.log(func.call(obj_2," Bhiwani "," india "));
    //by using apply method
    console.log(func.apply(obj_1,[" Bhiwani "," india "]));
   //bind

   

// //example of apply function 
// let a ={
//         name : `ak`,
//         age : 20,
//         write : function(address,Country){
//             return "hello "+this.name+this.age+address+Country;
//         }
      
//     }
//     arr=[" Bhiwani ", " India "];
//     let z={
//         name : ` ak1 `,
//         age : 25
    
//         }
//         console.log(a.write.call(z,[arr]));

//another example of Bind 
var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
console.log
(detailsOfPerson1());
//Returns Vivek, bike details: TS0122, Bullet