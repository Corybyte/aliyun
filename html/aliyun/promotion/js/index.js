// var ul = document.getElementsByClassName("bzzxul")[0];
// var li1 = ul.getElementsByTagName("li")[0];
// var tow = li1.getElementsByClassName("bzzx-tow")[0];

// var li2 = ul.getElementsByTagName("li")[1];
// var tow2 = ul.getElementsByClassName("bzzx-tow")[1];
// var li3 = ul.getElementsByTagName("li")[2];
// var tow3 = ul.getElementsByClassName("bzzx-tow")[2];
// var li4 = ul.getElementsByTagName("li")[3];
// var tow4 = ul.getElementsByClassName("bzzx-tow")[3];

// var li5 = ul.getElementsByTagName("li")[4];
// var tow5 = ul.getElementsByClassName("bzzx-tow")[4];
// var li6 = ul.getElementsByTagName("li")[5];
// var tow6 = ul.getElementsByClassName("bzzx-tow")[5];
// var li7 = ul.getElementsByTagName("li")[6];
// var tow7 = ul.getElementsByClassName("bzzx-tow")[6];
// run(li1,tow);
// run(li2, tow2);
// run(li3, tow3);
// run(li4, tow4);
// run(li5, tow5);
// run(li6, tow6);
// run(li7, tow7);
// var x = 0;
// function run(l,t){
//     l.onclick = function () {
//         t.style.height = "auto";
//         x++;
//         r(l, t);
//     }
// }
// function r(l,t){
//     if (x == 1) {
//         l.onclick = function () {
//             t.style.height = "0";
//             x = 0;
//             run(l, t);
//         }
//     }
// }
window.onload = function () {
    var lis = document.getElementsByClassName("bzzxul")[0].children;
    // alert(lis);
    for (var i = 0; i < lis.length; i++) {
        lis[i].a=i;
        lis[i].onclick = function () {
            //alert(lis[this.a].children[1].innerHTML);
          //  lis[this.a].children[0].style.height = "auto";
            if (lis[this.a].children[1].style.height == "auto") {
                lis[this.a].children[1].style.height = "0";
            } else {
                lis[this.a].children[1].style.height = "auto";
            }
        }
    }
}