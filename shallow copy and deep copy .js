//simple try to take the copy to the object
obj ={
    name: "John",
    age:35
}
// var obj2=obj;
// obj2.name="changed"
// console.log(obj);
// console.log(obj2);

//give it with the help of shallow copy
// var obj2={...obj}
// var obj2 = Object.assign(obj2,obj);
// obj2={...obj}
// obj2.name="changed";
// console.log(obj);
// console.log(obj2);


function deepcopy(obj) {
    if(typeof(obj)!=='object'||typeof(obj)===null) return obj;
    var copy =Array.isArray(obj) ? []:{};
    var kees=Object.keys(obj);
    for(var i=0;i<kees.length;i++){
    copy[kees[i]] = deepcopy(obj[keys[i]])
    }
    return copy
    }
    
}