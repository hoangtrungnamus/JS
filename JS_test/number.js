
let person = [
    {
        name: "Nam",
        age: 20,
        phone: "0984707504"
    },
    {
        name: "Hoàng",
        age: 22,
        phone: "0984707505"
    }
]



const names = [ 'Sơn', 'Quốc', 'Linh', 'Nam', 'My'];

//--------------------------------------------------------------------------------------------------------------------------------//

person[0].conutry = function(){
    return "Việt Nam";
}

console.log(person)

let copy = Object.assign({}, person)

console.log(copy[0].conutry())
console.log("akdksakd");

