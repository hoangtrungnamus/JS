

function parseHTML(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            document.getElementById("demo").innerHTML = this.responseText;
        }
        else{
            document.getElementById("demo").innerHTML = "status: " + this.status +  "<br>" + "readyStatus: " + this.readyState;
        }
    }
    xhttp.open("GET", "https://api.github.com/search/repositories?q=data%20science%20created:2017-01-01..2017-01-15&per_page=100");
    xhttp.send();
}