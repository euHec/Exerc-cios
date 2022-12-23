const body = document.querySelector('body');
const p = document.querySelectorAll('.paragrafo');
const p1 = document.querySelector('#paragrafo1');
const p2 = document.querySelector('#paragrafo2');
const corDeFundo = document.querySelectorAll('select')[0];
const corDeTexto = document.querySelectorAll('select')[1];
const tamanhoTexto = document.querySelector('#tamanho-fonte');
const espacamento = document.querySelectorAll('input[name="espacamento"]');
const fontFamily = document.querySelectorAll('input[name="fonte"]');

window.addEventListener ('load', () => {
    corDeFundo.addEventListener('change', () =>{
        body.style.backgroundColor = corDeFundo.value;
        localStorage.setItem('BrackgoundColor', `${corDeFundo.value}`);
    });
    
    corDeTexto.addEventListener('change', () => {
        body.style.color = corDeTexto.value;
        localStorage.setItem('ColorText', `${corDeTexto.value}`);
    })
    
    tamanhoTexto.addEventListener('change', () => {
        p1.style.fontSize = `${tamanhoTexto.value}px`;
        p2.style.fontSize = `${tamanhoTexto.value}px`; 
        localStorage.setItem('Paragraf', `${tamanhoTexto.value}`);
    })
    
    for (let index = 0; index < espacamento.length; index +=1) {
        espacamento[index].addEventListener('click', () => {
            p1.style.lineHeight = `${(espacamento[index].value) * 10}px`;
            p2.style.lineHeight = `${(espacamento[index].value) * 10}px`;
            localStorage.setItem('espacamento', `${(espacamento[index].value) * 10}px`);
        });
    }
    
    for (let index = 0; index < fontFamily.length; index +=1) {
        fontFamily[index].addEventListener('click', () => {
            p1.style.fontFamily = `${fontFamily[index].value}`;
            p2.style.fontFamily = `${fontFamily[index].value}`;
            localStorage.setItem('fontFamily', `${fontFamily[index].value}`);
        })
    }

    
        body.style.backgroundColor = localStorage.getItem('BrackgoundColor');
        body.style.color = localStorage.getItem('ColorText');
        p1.style.fontSize = localStorage.getItem('Paragraf');
        p2.style.fontSize = localStorage.getItem('Paragraf');
        p1.style.lineHeight = localStorage.getItem('espacamento');
        p2.style.lineHeight = localStorage.getItem('espacamento');
        p1.style.fontFamily = localStorage.getItem('fontFamily');
        p2.style.fontFamily = localStorage.getItem('fontFamily');
    
});