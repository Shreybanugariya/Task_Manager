const active = localStorage.getItem('active');
const logout = document.getElementById('logout');
uEmail = JSON.parse(localStorage.getItem('uEmail'));

console.log(uEmail, active)
uEmail.forEach((emails, i)=>{ 
    if(emails == active){
        task = []
        console.log(task)
    }
});

logout.onclick = function() { 
  localStorage.removeItem('active');
  window.location.href= 'login.html';
}
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const user_header = document.querySelector('.user_header')
user_header.innerHTML = ` User: ${active}'s Task`;


document.addEventListener("DOMContentLoaded", gettask);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  //Save to local - do this last
  //Save to local
  saveLocaltask(todoInput.value);
  //
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = 'Complete';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = 'Delete';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add("fall");
    //at the end
    removeLocaltask(todo);
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const task = todoList.childNodes;
  task.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveLocaltask(todo) {
  let task;
  if (localStorage.getItem("task") === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem("task"));
  }
  task.push(todo);
  localStorage.setItem("task", JSON.stringify(task));
}
function removeLocaltask(todo) {
  let task;
  if (localStorage.getItem("task") === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem("task"));
  }
  const todoIndex = todo.children[0].innerText;
  task.splice(task.indexOf(todoIndex), 1);
  localStorage.setItem("task", JSON.stringify(task));
}

function gettask() {
  let task;
  if (localStorage.getItem("task") === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem("task"));
  }
  task.forEach(function(todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = 'Complete';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = 'Delete';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}
const gitapi = "bxqK6wfJwFjYKxBqoRISkErrvtlfAZlK"
function getGif() {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${gitapi}&limit=20`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let i = 0
            setInterval(() => {
                if (i == 20) {
                    i = 0
                }
                document.getElementById("myImg").src = data.data[i].embed_url;
                i++;
            }, 5000);
        })
}
getGif();
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