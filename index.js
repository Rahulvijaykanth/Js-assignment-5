// 1.Create one function with zero parameter having a console statement:

function zeroPrarameter(){
    console.log();
}
zeroPrarameter();


// 2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7":

function add(a,b){
    let sum = a+b;
    console.log(sum);
}
add(3,4);



// 3.Create one arrow function:

let arr=[5,6,7,9];
let sum=0;
arr.forEach((val)=>{
    sum+=val;
})
console.log("sum of array elements is "+sum);


// Que-4--
// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


// Oue-5--
// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


// Q6..

let factorial = (n) =>{
    let fact = 1;
    for(let i=2; i<=n; i++){
        if (n==0){
            fact=1;
            break;
        }
        fact *=i;
    }
    console.log("the factorial of the" + n + "is:" + fact);
}
factorial(5);
