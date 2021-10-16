
const today = new Date();
let d = today.getDate();
let m = today.getMonth();
let y = today.getFullYear();


function loadData() {
    addNode("option", y + "", "year");
    addNode("option", m + 1 + "", "month");
    for (let i = y - 100; i <= y + 100; i++) {
        addNode("option", i + "", "year");
    }

    for (let i = 0; i < 12; i++) {
        addNode("option", i + 1 + "", "month");
    }

    let lastDay = new Date(y, m + 1, 0).getDate();
    display(lastDay)

}

function addNode(tag, nodeValue, idParents){
    let node = document.createElement(tag);
    let textNode = document.createTextNode(nodeValue);
    node.appendChild(textNode);
    document.getElementById(idParents).appendChild(node);
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

    let lastDay = new Date(tempy, tempm, 0).getDate();
    for (let i = 1; i <= 5; i++) {
        let x = document.getElementById("r" + i);
        if (x.hasChildNodes()) {
            x.innerHTML = "";
        }
    }
    display(lastDay);
}

function display(lastDay) {
    let showDate = 1;
    for (let i = 1; i <= 5; i++) {
        let x = document.getElementById("r" + i);
        for (let j = 0; j < 7; j++) {
            addNode("td", showDate +"", "r" + i);
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