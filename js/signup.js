var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signupBtn");
var errorMsg = document.getElementById("errorMsg")
var paragraphPassword = document.getElementById("paragraph-password")
var paragraphEmail = document.getElementById("paragraph-email")
var arrOfUsers = [];
arrOfUsers = JSON.parse(localStorage.getItem("userData"))
function addUser(){

    if(signupName.value == '' || signupEmail.value == '' || signupPassword.value == '')
    {
        errorMsg.innerHTML = "All inputs is required";
        errorMsg.style.color = "#dc3545";
        errorMsg.classList.replace("d-none" , "d-block");
    }
    else if(validation(signupEmail) == false && (signupName.value != '' && signupEmail.value != '' && signupPassword.value != ''))
    {
        errorMsg.classList.replace("d-block" , "d-none");
       
        paragraphEmail.classList.replace("d-none","d-block")
        
    }
    else if(validation(signupEmail) == true)
    {
        paragraphEmail.classList.replace("d-block" , "d-none")
    }
    if(validation(signupPassword) == false && (signupName.value != '' && signupEmail.value != '' && signupPassword.value != ''))
    {
        errorMsg.classList.replace("d-block" , "d-none");
       
        paragraphPassword.classList.replace("d-none","d-block")
            
    }
    else if(validation(signupPassword) == true)
    {
        paragraphPassword.classList.replace("d-block" , "d-none")
    }
    if(validation(signupEmail) == true && validation(signupPassword) == true)
    {
        var user = {
            userName: signupName.value,
            userEmail: signupEmail.value,
            userPassword: signupPassword.value
        };
        if(localStorage.length == 0)
        {
            arrOfUsers = []
            addEmail(user);
            window.location.assign("index.html")
        }
        else
        {
            var valid = false;
            for(var i = 0 ; i < arrOfUsers.length ; i++)
            {    
                if(arrOfUsers[i].userEmail == user.userEmail)
                {
                    valid = true;
                }
            }
            if(valid == true)
            {
                validEmail()
            }
            else
            {
                addEmail(user);
                window.location.assign("index.html")
            }
        }
    }
}


function addEmail(user){
        arrOfUsers.push(user);
        localStorage.setItem('userData' , JSON.stringify(arrOfUsers));
        errorMsg.innerHTML = "Success";
        errorMsg.style.color ="#adff2f";
        errorMsg.classList.replace("d-none" , "d-block");
}

function validEmail(){
        errorMsg.innerHTML = "email already exists";
        errorMsg.style.color = "#dc3545";
        errorMsg.classList.replace("d-none" , "d-block");
}

function validation(element){
    var input = element.value;
    var regex = {
        signupEmail : /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,
        signupPassword : /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    }
    if(regex[element.id].test(input) == true )
    {
        return true;
    }
    else
    {
        return false
    }
}

signupBtn.addEventListener('click' ,function(){
    addUser();
})
