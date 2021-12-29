
var cxzx = document.getElementsByClassName("cxzx");
for(var i = 2;i<4;i++){
    cxzx[i].onclick = function () {
        {
            var two = document.getElementsByClassName("cxcy-two")[i];
            if (two.style.zIndex != 1) {
                two.style.zIndex = '1';
            } else {
                two.style.zIndex = '0';
            }
        }
    }
}
// setInterval(function () { 
//     var topx = document.getElementsByClassName("top")[0];
//     var topa = topx.getElementsByTagName("a");
//     topa.onclick=function(){
//         topa.style.top='0';
//     }
// }, 3000);