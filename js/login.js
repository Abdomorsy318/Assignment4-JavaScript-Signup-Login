var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var errorMsg = document.getElementById("errorMsg");
function login(){

    if(loginEmail.value == '' || loginPassword.value == '')
    {
        errorMsg.innerHTML = "All inputs is required";
        errorMsg.style.color = "#dc3545";
        errorMsg.classList.replace("d-none" , "d-block");
    }
    else
    {
        var loginUser = {
            loginEmail : loginEmail.value,
            loginPassword : loginPassword.value 
        }
        var numberOfUsers = JSON.parse(localStorage.getItem("userData"))
        for(var i = 0 ; i < numberOfUsers.length ; i++)
        {
            if(numberOfUsers[i].userEmail == loginUser.loginEmail && numberOfUsers[i].userPassword == loginUser.loginPassword)
            {
                errorMsg.innerHTML = "Success";
                errorMsg.style.color ="#adff2f";
                errorMsg.classList.replace("d-none" , "d-block");
                window.location ="./home.html";
                localStorage.setItem("id" , i)               
                break;
            }
            else
            {
                errorMsg.innerHTML = "incorrect email or password";
                errorMsg.style.color ="#dc3545";
                errorMsg.classList.replace("d-none" , "d-block");
            }
           
        }
    }

}

loginBtn.addEventListener("click"  , function(){
    login();
})
