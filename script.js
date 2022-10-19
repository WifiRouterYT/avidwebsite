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
    await (function fade(){(s.opacity-=.05)<0?s.display="none":setTimeout(fade,50)})();
    await scaleupanim(entertxt);
    await gimmenav();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function scaleupanim(object) {
    c = 32;
    for (var i = 0; i < 100; i++) {
        c = c + 0.5;
        object.style.fontSize = c;
        object.style.letterSpacing = c-32;
        await sleep(50);
    }
}

async function gimmenav() {
    while(true) {
        if(s.display === "none") {
            navbar.style.top = 0;
            console.log("found!")
            break;
        }
        console.log('waiting...')
        await sleep(100);
    }
}