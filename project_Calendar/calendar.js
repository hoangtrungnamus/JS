
const today = new Date();
let d = today.getDate();
let m = today.getMonth();
let y = today.getFullYear();


function loadData() {

    for (let i = y - 100; i < y + 100; i++) {
        let node = document.createElement("option");
        let textNode = document.createTextNode(i + "");
        node.appendChild(textNode);
        document.getElementById("year").appendChild(node);
    }

    for (let i = 0; i < 12; i++) {
        let node = document.createElement("option");
        let textNode = document.createTextNode(i + 1 + "");
        node.appendChild(textNode);
        document.getElementById("month").appendChild(node);
    }

    let temp = new Date(y, m + 1, 0).getDate();
    for (let i = 1; i <= temp; i++) {
        let node = document.createElement("option");
        let textNode = document.createTextNode(i + "");
        node.appendChild(textNode);
        document.getElementById("day").appendChild(node);
    }

}

function setDate() {
    let tempm = document.getElementById("month").value;
    let tempy = document.getElementById("year").value;
    if (!Number.isInteger(Number(tempm))) {
        tempm = m;
    }
    else {
        tempm = Number(tempm);
    }

    if (!Number.isInteger(Number(tempy))) {
        tempy = y;
    }
    else {
        tempy = Number(tempy);
    }

    let tempd = document.getElementById("day");
    let lastDay = new Date(tempy, tempm, 0).getDate();
    if (tempd.hasChildNodes()) {
        document.getElementById("day").innerHTML = "";
        let node = document.createElement("option");
        let textNode = document.createTextNode("Select Date");
        node.appendChild(textNode);
        document.getElementById("day").appendChild(node);
        for (let i = 1; i <= lastDay; i++) {
            let node = document.createElement("option");
            let textNode = document.createTextNode(i + "");
            node.appendChild(textNode);
            document.getElementById("day").appendChild(node);
        }
        for (let i = 1; i <= 5; i++) {
            let x = document.getElementById("r" + i);
            if (x.hasChildNodes()) {
                x.innerHTML = "";
            }
        }
        display(lastDay);

    }

}

function display(lastDay) {
    let showDate = 1;
    for (let i = 1; i <= 5; i++) {
        let x = document.getElementById("r" + i);
        for (let j = 0; j < 7; j++) {
            let nodeDay = document.createElement("td");
            let textDay = document.createTextNode(showDate + "");
            nodeDay.appendChild(textDay);
            x.appendChild(nodeDay);
            showDate++;
            if (showDate > lastDay) {
                break;
            }
        }
        if (showDate > lastDay) {
            break;
        }
    }
}