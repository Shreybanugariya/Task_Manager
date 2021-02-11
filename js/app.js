// Register Element Selector
const name = document.getElementById('username');
const pw = document.getElementById('password');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const dob = document.getElementById('date');
const reg_form = document.getElementById('reg_form');

console.log(reg_form);
reg_form.onsubmit = (e)=>{
    e.preventDefault();
    console.log('test');
    console.log(dob.value)
    console.log(email.value)
    console.log(phone.value)
    console.log(gender.value)
    let username, uEmail, uPassword, uGender, uDob, uPhone; 
    if(localStorage.getItem('username') === null && localStorage.getItem('uEmail') === null && localStorage.getItem('uPassword') === null && localStorage.getItem('uDob') === null && localStorage.getItem('uGender')=== null && localStorage.getItem('uPhone') === null){
        username = []
        uEmail = []
        uPassword = []
        uDob = []
        uGender = []
        uPhone = []
    }else{
        username = JSON.parse(localStorage.getItem('username'));
        uEmail = JSON.parse(localStorage.getItem('uEmail'));
        uPassword = JSON.parse(localStorage.getItem('uPassword'));
        uPhone = JSON.parse(localStorage.getItem('uPhone'));
        uDob = JSON.parse(localStorage.getItem('uDob'));
        uGender = JSON.parse(localStorage.getItem('uGender'));
    }

    username.push(name.value);
    uEmail.push(email.value);
    uPassword.push(pw.value);
    uPhone.push(phone.value);
    uGender.push(gender.value);
    uDob.push(dob.value);

    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('uEmail', JSON.stringify(uEmail));
    localStorage.setItem('uPassword', JSON.stringify(uPassword));
    localStorage.setItem('uPhone', JSON.stringify(uPhone));
    localStorage.setItem('uDob', JSON.stringify(uDob));
    localStorage.setItem('uGender', JSON.stringify(uGender));

    window.location.href='login.html'
};


