var welcomHome = document.getElementById("homePage");
var numberOfUsers = JSON.parse(localStorage.getItem("userData"));
var id = localStorage.getItem("id");
var logoutBtn = document.getElementById("logoutBtn");

welcomHome.innerHTML += ` ${numberOfUsers[id].userName}`;

logoutBtn.addEventListener("click" , function(){
    window.location = "./index.html";
})