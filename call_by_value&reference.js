const { func, obj_2 } = require("./call,apply,blind");

//call by value 
let x = 10;

function modifyValue(val) {
    val = 20;
    // console.log(val);

}

modifyValue(x);
// console.log(x); // Outputs: 10
// call by reference 
let obj = { name: `Aakash yadav` };
function modifyObject(k) {
    console.log(k.name);

    k.name = `boby`;
}
modifyObject(obj);
console.log(obj.name);//by using bind method
export let b = func.bind(obj_2, " Bhiwani ", " india ");
// Outputs: { name: 'boby' }