
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



const names = ['Sơn', 'Quốc', 'Linh', 'Nam', 'My'];

//--------------------------------------------------------------------------------------------------------------------------------//

person[0].conutry = function () {
    return "Việt Nam";
}

let car = '{"name": "Ford","year": 2017}'

let carobj = JSON.parse(car)
console.log(carobj.name)

console.log(Infinity)

function Display(some) {
    console.log(some)
}

function Cal(a, b, myCallback) {
    let s = a + b;
    myCallback(s);
}

Cal(5, 5, Display);


// function myClock(){
//     let d = new Date();
//     let h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
//     document.getElementById("test").innerHTML = h + ":" + m + ":" + s;
// }



// setInterval(myClock, 1000);

function setRed() {
    let circle = document.getElementById("frame").style.backgroundColor = "red";
}

function setBlack() {
    let circle = document.getElementById("frame").style.backgroundColor = "black";
}

function setColor() {
    let circle = document.getElementById("frame").style.backgroundColor = "blue";
}

function checkValidate() {
    let x = document.forms["myform"]["fname"].value;
    if (x == "") {
        alert("Alo");
        return false;
    }
    else {
        return true;
    }
}




console.log("windowWidth: " + window.innerWidth);
console.log("windowHeight: " + window.innerHeight);
console.log("screenWidth: " + screen.width);
console.log("screenHeigh: " + screen.height);

window.addEventListener("resize", function () {
    this.document.getElementById("width").innerHTML = window.innerWidth;
    this.document.getElementById("height").innerHTML = window.innerHeight;
})


// function loadDoc(){
//     const http = new XMLHttpRequest();
//     http.onload = function(){
//         document.getElementById("fnamei").value = this.responseText;
//         // document.getElementById("fnamei").style.overflow = "scroll";
//     }
//     http.open("GET", "demoAjax.txt");
//     http.send();
// }

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        let x = this.responseText;
        let y = JSON.parse(x);
        let z = y['items'][2];
        let m = z['id'];
        document.getElementById("fnamei").value = m;
        document.getElementById("fnamei").style.height = "300px";

    }
    xhttp.open("GET", "demoAjax.txt");
    xhttp.send();
}