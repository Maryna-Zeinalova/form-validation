const userNameInput = document.getElementById('user-name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

function validateStyle(condition, element){
    if (condition){
        element.classList.remove('invalid')
        element.classList.add('valid');
    }else{
        element.classList.remove('valid');
        element.classList.add('invalid'); 
    }
}


submitButton.addEventListener('click', function(event){
    event.preventDefault();
})


