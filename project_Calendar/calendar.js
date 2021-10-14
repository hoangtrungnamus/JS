function loadData() {
    let d = new Date().getFullYear();
    for (let i = d - 100; i < d + 100; i++) {
        let node = document.createElement("option");
        let textNode = document.createTextNode(i + "");
        node.appendChild(textNode);
        document.getElementById("year").appendChild(node);
    }
}

function checkYear() {
    let year = document.getElementById("year").value;
    if (Number.isInteger(Number(year))) {
        
    }
}