function chk1() {
    let nam = document.getElementById('nam').value;
    let pass = document.getElementById('pass').value;

    if (pass === "admin" && nam === "admin") {
        window.location.href = "step2.html";
    } else {
        document.getElementById('msg').innerText = "Wrong entry!";
        document.getElementById('hint').innerText = "Hint: only __ access"
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
        window.location.href = "step4.html";
    } else {
        document.getElementById('hint').innerText = "Hint: 08/01/2026 = 0+8+0+1+2+0+2+6 = 19"
        document.getElementById('msg').innerText = "Wrong sum entered!";
    }
}

function chk3() {
    let lyr = document.getElementById('lyr').value.toLowerCase();
    let ans = "hotel california"; 

    if (lyr === ans) {
        window.location.href = "final.html";
    } else {
        document.getElementById('msg').innerText = "Wrong song! Try again.";
        document.getElementById('hint').innerText = "Hint: Starts with \"Hotel ...?\""
    }
}

function play() {
    let aud = document.getElementById('aud');
    aud.play();
}

window.onload = captcha;
var result;

function captcha(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    document.getElementById('captcha').innerText = result;
}

function captchaCheck(){
    let inp = document.getElementById('inp').value;
    if (inp === result) {
        window.location.href = "step3.html";
    } else {
        document.getElementById('msg').innerText = "Wrong captcha! Try again.";
    }
}