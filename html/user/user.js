window.onload = function () {
    /* var body = document.getElementsByTagName("body")[0]; */
    var dlt = document.getElementById("delete");
    var two = document.getElementsByClassName("side-list-two")[0];
    dlt.onclick=function(){
        two.style.display="none";
    }
    /* body.onclick = function () {
        two.style.display = "none";
    } */
    var ax = document.getElementById("ax");
    ax.onmouseover=function(){
        two.style.display="block";
    }
}