const passwordInput = document.getElementById('passInput');
const passwordStrenght = document.getElementById('passStrenght');

let strongPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumPassword = new RegExp('^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

function checkPasswordStrenght(passwordValue){
    if(strongPassword.test(passwordValue)) {
        passwordStrenght.style.color = 'green';
        passwordStrenght.textContent = 'Strong';
    } else if(mediumPassword.test(passwordValue)){
        passwordStrenght.style.color = 'orange';
        passwordStrenght.textContent = 'Medium';
    } else{
        passwordStrenght.style.color = 'red';
        passwordStrenght.textContent = 'Weak';
    }
};

passwordInput.addEventListener('input', () =>{
    passwordStrenght.style.display= 'block';
    checkPasswordStrenght(passwordInput.value);
    
    if(passwordInput.value.length !== 0){
        passwordStrenght.style.display != 'block';
    } else {
        passwordStrenght.style.display = 'none';
    }
});