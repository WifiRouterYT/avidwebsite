// All code is created by WifiRouter
// Tested on Chrome

var s = null; var entertxt = null; var enterbtn = null; var navbar = null;

window.addEventListener('load', function() {
    // register elements after site has fully loaded to prevent null errors
    entertxt = document.getElementById('entertxt');
    enterbtn = document.getElementById('enterbtn');
    navbar = document.getElementById('nav');
    s = document.getElementById('overlay').style;
    // get rid of text until user clicks button
    entertxt.style.display = "none";
});

async function entersite() {
    enterbtn.style.display = "none";
    entertxt.style.display = "block";
    
    s.opacity = 1;
    //await overlayFade();
    await (function fade(){(s.opacity-=.05)<0?s.display="none":setTimeout(fade,40)})();
    await scaleupanim(entertxt);
    await slideinNavBar();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function slideinNavBar() {
    var d = -48;
    for (var i = 0; 1 < 48; i++) {
        d++;
        navbar.style.marginTop = d;
        console.log("Top margin of nav: " + d);
        await sleep(50);
    }
}

async function overlayFade() {
    var b = 1;
    for (var i = 0; i < 100; i++) {
        if (s.backgroundColor = "rgba(21, 21, 21, 0)") {
            s.display = "none";
        }
        s.backgroundColor = "rgba(21, 21, 21," + b + ")";
        b = b - 0.005;
        console.log(b);
        await sleep(150);
    }
}

async function scaleupanim(object) {
    c = 32;
    for (var i = 0; i < 100; i++) {
        c = c + 0.5;
        object.style.fontSize = c;
        object.style.letterSpacing = c-32;
        await sleep(25);
    }
}