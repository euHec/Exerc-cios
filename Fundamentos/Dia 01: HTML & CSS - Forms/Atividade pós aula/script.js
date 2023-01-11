const submit = document.querySelector('#submit');
const agreed = document.querySelectorAll('#agreed');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const answer = document.querySelector('#answer');





const sendInf = () => {
    agreed[1].addEventListener('change', (event) => {
        if (event.target.checked === true){
            submit.disabled = !agreed[1].checked;
        }
        if (event.target.checked === false){
            submit.disabled = !agreed[1].checked;
        }
    })
}

const verify = () => {
    submit.addEventListener('click', (event) => {

        event.preventDefault();

        if (nome.value.length < 10 || nome.value.length > 40) {
            alert('Dados Inválidos!')
        } else if (email.value.length <= 10 || email.value.length > 50) {
            alert('Dados Inválidos!')
        } else if (answer.value.length > 500) {
            alert('Dados Inválidos!')
        } else {
            alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
        }
    })
}

window.onload = () => {
    sendInf();
    verify();
}


// Hector Souza e souza hector@gmail.com