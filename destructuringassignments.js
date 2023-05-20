// Array where only unique numbers are allowed-
let arr1 = [1,8,9,6,2,5,4,7,7,6,9,2,9,0,1,3,];
let uniqueArr = new Set(arr1);
console.log(uniqueArr);

// Swapping of values-
function swapValue(x,y){
    let arrayWithoutSwapping = [x,y];
    let arrayWithSwapping = arrayWithoutSwapping.reverse();
    console.log(`Value of x is :${arrayWithSwapping[0]} and value of y is : ${arrayWithSwapping[1]}`);
    console.log(arrayWithSwapping);
}
swapValue(5,10);

// Array with n numbers of elements-

 function array(...restpara){
    console.log(restpara);
};
 array(1,2,3,4,5);

// Maximum and minimum numbers with spread operator-
let array1 = [1,3,5,7,9,11,13,15];
let array2 = [2,4,6,8,10,12,14,16];
let array3 = [...array1, ...array2];
console.log("Min: " + Math.min(...array3) +", " + "Max: " + Math.max(...array3));

// Object destructuring-
let obj1 = {
    name: "Mithun",
    age: 21,
    address: {
        street:"B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        State: "Uttar Pradesh"
    }
}
let{name,age,address:{street,city,state}} = obj1;
console.log((obj1.name)," ", (obj1.address.street));

