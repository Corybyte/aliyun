var imge = document.getElementById("main-lunbo-img-e");
        var imgd = document.getElementById("main-lunbo-img-d");
        var imgc = document.getElementById("main-lunbo-img-c");
        var imgb = document.getElementById("main-lunbo-img-b");
        var imga = document.getElementById("main-lunbo-img-a");
        setInterval(function () {
            imge.style.left = '-100%';
            imga.style.left = '0';
        }, 5000);
        setInterval(function () {
            imgd.style.left = '-100%';
        }, 10000);
        setInterval(function () {
            imgc.style.left = '-100%';
        }, 15000);
        setInterval(function () {
            imgb.style.left = '-100%';
        }, 20000);
        setInterval(function () {
            imga.style.left = '-100%';
            imge.style.left = '0';
            imgd.style.left = '0';
            imgc.style.left = '0';
            imgb.style.left = '0';
        }, 25000);
        /* ******************************************************* */
var box1 = document.getElementById("box1");
        var img1 = document.getElementById("imgs1");
        box1.onmouseover = function () {
            var i1 = 0;
            setInterval(function () {
                if (i1 < 4425) {
                    i1 += 75;
                    img1.style.top = '-' + i1 + 'px'
                }
            }, 20);
        }
        box1.onmouseout = function () {
            var i = 4425;
            setInterval(function () {
                if (i > 0) {
                    i -= 75;
                    img1.style.top = '-' + i + 'px'
                }
            }, 20);
        }
/* ************ */
var box2 = document.getElementById("box2");
        var img2 = document.getElementById("imgs2");
        box2.onmouseover = function () {
            var i2 = 0;
            setInterval(function () {
                if (i2 < 4425) {
                    i2 += 75;
                    img2.style.top = '-' + i2 + 'px'
                }
            }, 20);
        }
        box2.onmouseout = function () {
            var i2 = 4425;
            setInterval(function () {
                if (i2 > 0) {
                    i2 -= 75;
                    img2.style.top = '-' + i2 + 'px'
                }
            }, 20);
        }
/* ************ */
var box3 = document.getElementById("box3");
        var img3 = document.getElementById("imgs3");
        box3.onmouseover = function () {
            var i3 = 0;
            setInterval(function () {
                if (i3 < 4425) {
                    i3 += 75;
                    img3.style.top = '-' + i3 + 'px'
                }
            }, 20);
        }
        box3.onmouseout = function () {
            var i3 = 4425;
            setInterval(function () {
                if (i3 > 0) {
                    i3 -= 75;
                    img3.style.top = '-' + i3 + 'px'
                }
            }, 20);
        }
/* ************ */
var box4 = document.getElementById("box4");
        var img4 = document.getElementById("imgs4");
        box4.onmouseover = function () {
            var i4 = 0;
            setInterval(function () {
                if (i4 < 4425) {
                    i4 += 75;
                    img4.style.top = '-' + i4 + 'px'
                }
            }, 20);
        }
        box4.onmouseout = function () {
            var i4 = 4425;
            setInterval(function () {
                if (i4 > 0) {
                    i4 -= 75;
                    img4.style.top = '-' + i4 + 'px'
                }
            }, 20);
        }
/* ************ */
var box5 = document.getElementById("box5");
        var img5 = document.getElementById("imgs5");
        box5.onmouseover = function () {
            var i5 = 0;
            setInterval(function () {
                if (i5 < 4425) {
                    i5 += 75;
                    img5.style.top = '-' + i5 + 'px'
                }
            }, 20);
        }
        box5.onmouseout = function () {
            var i5 = 4425;
            setInterval(function () {
                if (i5 > 0) {
                    i5 -= 75;
                    img5.style.top = '-' + i5 + 'px'
                }
            }, 20);
        }
/* ************ */
var box6 = document.getElementById("box6");
        var img6 = document.getElementById("imgs6");
        box6.onmouseover = function () {
            var i = 0;
            setInterval(function () {
                if (i < 4425) {
                    i += 75;
                    img6.style.top = '-' + i + 'px'
                }
            }, 20);
        }
        box6.onmouseout = function () {
            var i = 4425;
            setInterval(function () {
                if (i > 0) {
                    i -= 75;
                    img6.style.top = '-' + i + 'px'
                }
            }, 20);
        }
/* ************ */
        /* ************************************************************ */