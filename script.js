// All code is created by WifiRouter
// Tested on Chrome

var link1 = null; var link2 = null; var link3 = null; var link4 = null; var s = null; var entertxt = null; var enterbtn = null; var navbar = null; var content = null;

window.addEventListener('load', async function() {
    // register elements after site has fully loaded to prevent null errors
    entertxt = document.getElementById('entertxt');
    enterbtn = document.getElementById('enterbtn');
    navbar = document.getElementById('nav');
    s = document.getElementById('overlay').style;
    content = document.getElementById('content');
    link1 = document.getElementById('link1');
    link2 = document.getElementById('link2');
    link3 = document.getElementById('link3');
    link4 = document.getElementById('link4');
    // get rid of text until user clicks button
    entertxt.style.display = "none";
    //entersite();
});

async function entersite() {
    enterbtn.style.display = "none";
    entertxt.style.display = "block";
    
    s.opacity = 1;
    await (function fade(){(s.opacity-=.05)<0?s.display="none":setTimeout(fade,60)})();
    await scaleupanim(entertxt);
    await sleep(250);
    await showmethecontent();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showmethecontent() {
    navbar.style.transform = "scaleY(1)";
    await sleep(50);
    content.style.transform = "scaleY(1)";
    await sleep(250);
    link1.style.transform = "scaleY(1)";
    await sleep(50);
    link2.style.transform = "scaleY(1)";
    await sleep(50);
    link3.style.transform = "scaleY(1)";
    await sleep(50);
    link4.style.transform = "scaleY(1)";
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
        if (s.display == "none") {
            break;
        }
        c = c + 1;
        object.style.fontSize = c;
        object.style.letterSpacing = c-32;
        await sleep(25);
    }
}