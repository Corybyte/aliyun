var rmkca = document.getElementsByClassName("rmkc")[0];
var lia = rmkca.getElementsByTagName("span")[0];
var lib = rmkca.getElementsByTagName("span")[1];


var infa = document.getElementsByClassName("a")[0];
var infb = document.getElementsByClassName("b")[0];

var spana = document.getElementById("spana");
var spanb = document.getElementById("spanb");


lia.onmouseover=function(){
    infa.style.display = "block";
    infb.style.display="none";
    spanb.style.borderBottom = "#fff solid 1px";
    spana.style.borderBottom = "none";
}
lib.onmouseover = function () {
    infb.style.display = "block";
    infa.style.display = "none";
    spana.style.borderBottom = "#fff solid 1px";
    spanb.style.borderBottom="none";
}
