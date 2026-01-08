function chk1() {
    let nam = document.getElementById('nam').value;

    if (nam.length > 0 && nam[0] === nam[0].toUpperCase()) {
        window.location.href = "step2.html";
    } else {
        document.getElementById('msg').innerText = "Name must start with a capital letter!";
    }
}

function chk2() {
    let val = document.getElementById('inp').value;
    
    let now = new Date();
    let day = now.getDate().toString();
    let mon = (now.getMonth() + 1).toString();
    let year = now.getFullYear().toString();
    
    let all = day + mon + year;
    let sum = 0;

    for (let i = 0; i < all.length; i++) {
        sum += parseInt(all[i]);
    }

    if (parseInt(val) === sum) {
        window.location.href = "step3.html";
    } else {
        document.getElementById('msg').innerText = "Wrong sum entered!";
    }
}

function chk3() {
    let lyr = document.getElementById('lyr').value.toLowerCase();
    let ans = "ready a room at the hotel california"; 

    if (lyr === ans) {
        window.location.href = "page2.html";
    } else {
        document.getElementById('msg').innerText = "Wrong lyrics! Try again.";
    }
}

function play() {
    let aud = document.getElementById('aud');
    aud.play();
}