const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.Value;
    const emailValue = email.Value;
    const passwordValue = password.Value;
    const passwordconfirmationValue = passwordconfirmation.Value;
    
    if(usernameValue === " "){
        setErrorFor(username, "O nome de usuário é obrigatório.");
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email, "O E-mail é o obrigatório.");
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um E-mail válido");
    }else{
        setSuccessFor(email);
    }

    if(passwordValue ===""){
        setErrorFor(password, "A senha é obrigatória.");
    } else if(passwordValue.length < 7){
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    }else{
        setSuccessFor(password);
    }

    if(passwordconfirmationValue === ""){
        setErrorFor(passwordconfirmation, "Confirme a sua senha.");
    }else if(passwordconfirmationValue != passwordValue){
        setErrorFor(passwordconfirmation, "As senhas precisam ser iguais.")
    }else{
        setSuccessFor(passwordconfirmation);
    }
    
    const formcontrols = form.querySelectorAll('.formcontrol');

    const formIsValid = [...formcontrols].every(formcontrol =>{
        return formcontrol.className === 'formcontrol success)';
    })

    if(formIsValid){
        console.log("O formulário está 100% válido!")
    }


}

function setErrorFor(input,message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');

    small.innerText = message;
    formcontrol.className = 'formcontrol error';
}

function setSuccessFor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formcontrol success'
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
}
