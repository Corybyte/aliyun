var lba = document.getElementsByClassName("lblist-main")[0];
var ulx = lba.getElementsByTagName("ul")[0];
var l = 0;
function run() {
    if (l < 4080) {
        ulx.style.left = "-" + l + "px";
    } else {
        l = 0;
    }
    l += 680;
}
setInterval(run, 2000);