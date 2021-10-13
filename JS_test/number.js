
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

let car = '{"name": "Ford","year": 2017}'

let carobj = JSON.parse(car)
console.log(carobj.name)

console.log(Infinity)

function Display(some){
    console.log(some)
}

function Cal(a,b, myCallback){
    let s = a + b;
    myCallback(s);
}

Cal(5,5,Display);


// function myClock(){
//     let d = new Date();
//     let h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
//     document.getElementById("test").innerHTML = h + ":" + m + ":" + s;
// }



// setInterval(myClock, 1000);

function setRed(){
    let circle = document.getElementById("frame");
    circle.className = '';
    circle.classList.add("red");
}

function setBlack(){
    let circle = document.getElementById("frame");
    circle.className = '';
    circle.classList.add("black");
}

function setColor(){
    let circle = document.getElementById("frame");
    circle.className = '';
}