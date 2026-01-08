function chk() {
    let val = document.getElementById('inp').value;
    
    
    let now = new Date();
    let day = now.getDate().toString();
    let mon = (now.getMonth() + 1).toString();
    let yer = now.getFullYear().toString();
    
    let all = day + mon + yer;
    let sum = 0;

    for (let i = 0; i < all.length; i++) {
        sum += parseInt(all[i]);
    }

    if (parseInt(val) === sum) {
        window.location.href = "page2.html";
    } else {
        document.getElementById('msg').innerText = "Wrong info entered!";
    }
}