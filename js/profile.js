let username, uPhone, uPassword, uEmail, uGender, uDob;
const active = localStorage.getItem('active');
console.log(active)
username = JSON.parse(localStorage.getItem('username'));
uPhone = JSON.parse(localStorage.getItem('uPhone'));
uEmail = JSON.parse(localStorage.getItem('uEmail'));
uPassword = JSON.parse(localStorage.getItem('uPassword'));
uGender = JSON.parse(localStorage.getItem('uGender'));
uDob = JSON.parse(localStorage.getItem('uDob'));
const logout = document.getElementById('logout');
logout.onclick = function() { 
  localStorage.removeItem('active');
  window.location.href= 'login.html';
}
const name = document.getElementById('username');
const pw = document.getElementById('password');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const dob = document.getElementById('date');
const update = document.getElementById('profile_form');
    
uEmail.forEach((emails, i)=>{ 
    if(emails == active){
        console.log(active, email.value)
        name.value = username[i]; 
        phone.value = uPhone[i]; 
        email.value = active; 
        pw.value = uPassword[i]; 
        gender.value = uGender[i];
        dob.value = uDob[i];
        console.log(active, email.value)
    }else{
        // console.log('in else');
    }
});

update.onsubmit = function(e) {
    e.preventDefault();
    if(name && email && phone && pw && dob && gender){
        let key;
        console.log(name.value, phone.value, email.value, pw.value)
        username = JSON.parse(localStorage.getItem('username'));
        uEmail = JSON.parse(localStorage.getItem('uEmail'));
        uPhone = JSON.parse(localStorage.getItem('uPhone'));
        uPasword = JSON.parse(localStorage.getItem('uPassword'));
        uDob = JSON.parse(localStorage.getItem('uDob'));
        uGender = JSON.parse(localStorage.getItem('uGender'));
    
        uEmail.forEach((emails, i)=>{
            if(emails==active){
                console.log(username[i], uPhone[i], uPassword[i]), uGender[i], uDob[i];
                username[i] = name.value;
                uPassword[i] = pw.value;
                uPhone[i] = phone.value;
                uDob[i] = dob.value;
                uGender[i] = gender.value;
                uEmail[i] = email.value;
            }
        });
            localStorage.setItem('active', email.value);
            console.log('Hellooo')
            console.log('update active - ', active);
            localStorage.setItem('username', JSON.stringify(username));
            localStorage.setItem('uphone', JSON.stringify(uPhone));
            localStorage.setItem('uEmail', JSON.stringify(uEmail));
            localStorage.setItem('uDob', JSON.stringify(uDob));
            localStorage.setItem('uGender', JSON.stringify(uGender));
            localStorage.setItem('uPassword', JSON.stringify(uPassword));
        
    }
    else{
        alert('One of the field is empty');
    }
}
//  Location and Temperature
function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
  
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "8d90d7c5871bfcf02513e90d0b2f55b0";
  
    location.innerHTML = "Locating...";
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          
          let temp = data.main.temp;
          temperature.innerHTML = temp + "° F";
          location.innerHTML =
            data.name + " (" + latitude + "°, " + longitude + "°)";
          description.innerHTML = data.weather[0].main;
        });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  }
  
  getWeather();