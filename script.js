var user_password = document.getElementById("user_password");
var confirm_password  = document.getElementById("confirm_password");
var create_account = document.getElementById("create_account");
var password_check = document.querySelectorAll(" .password[data-error] .input");


create_account.addEventListener("submit", function(event){  
    if(user_password.value !== confirm_password.value) {
        alert("Password and confirm password do not match.");
        //password_check.parentElement.removeAttribute('data-error');
        //user_password.setAttribute('style', 'border: 1px solid rgb(243, 87, 87;');
        //confirm_password.style.border = ");"
        event.preventDefault();
    }

});

password_check.forEach(inpEl=>{inpEl.addEventListener('input', ()=>inpEl.parentElement.removeAttribute('data-error'));
});