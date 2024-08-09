let a={
    f_name:`aakash `,
    l_name:`yadav`,
    age: 20,
   
    
    
}

let information= function(hometown){
    console.log(this.f_name,this.l_name,this.age,hometown);
    
}

let z={
    f_name:`aakashyy `,
    l_name:`yadav`,
    age: 20,    
}
information.call(z,"Bhiwani");
information.apply(a,["rishikesh"]);
// information.call(a);
// information.call(a);
// information.call(a);
