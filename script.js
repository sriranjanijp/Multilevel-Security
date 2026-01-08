function chk1() {
    let nam = document.getElementById('nam').value;

    if (nam.length > 0 && nam[0] === nam[0].toUpperCase()) {
        window.location.href = "step2.html";
    } else {
        document.getElementById('msg').innerText = "Wrong entry!";
        document.getElementById('hint').innerText = "Hint: Names must start with capital letters"
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
        document.getElementById('hint').innerText = "Hint: 08/01/2026 = 0+8+0+1+2+0+2+6 = 19"
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
        document.getElementById('hint').innerText = "Hint: Starts with \"ready a ...?\""
    }
}

function play() {
    let aud = document.getElementById('aud');
    aud.play();
}