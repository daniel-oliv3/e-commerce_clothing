// Selecionar entradas(Inputs)
const submitBTn = document.querySelector('.submit-btn');
const name = document.querySelector('name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notificatinos');

submitBTn.addEventListener('click', () => {
    if(name.value.length < 3){
        showAlert('O nome deve ter 3 letras');
    } else if(!email.value.length){
        showAlert('Digite seu e-mail');
    } else if(password.value.length < 8){
        showAlert('A senha deve ter 8 letras');
    } else if(!Number(number.value) || number.value.length < 10){
        showAlert('número inválido, por favor insira um válido');
    } else if(!tac.value.checked){
        showAlert('Você deve concordar com nossos termos e condições');
    }
})

// Função de alerta
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}