const login_username = document.getElementById('user_email_contact');
const log_pass = document.getElementById('userPw');
const log_form = document.querySelector('#login_form');

log_form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(login_username && log_pass){
        let uEmail, uPassword, uPhone, key;
        if(localStorage.getItem('uEmail')=== null && localStorage.getItem('uPassword') === null){
            alert('Email Doesnot Exist');
        }
        else{
            uEmail = JSON.parse(localStorage.getItem('uEmail'));
            uPassword = JSON.parse(localStorage.getItem('uPassword'));
            uEmail.forEach((email, i) => {
                if (email == login_username.value || uPhone == login_username.value)
                    key = i;
                    localStorage.setItem('active', login_username.value);
                   
            });
            
            if(uPassword[key] == log_pass.value){
                alert('Login Succesfull');
                
                window.location.href = 'profile.html';
            }else {
                alert('Opps.... Email or Password doesn\'t match');
            }
        }    
    }
});

