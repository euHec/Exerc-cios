// console.log(document.getElementById('paiDoPai').childNodes);
// console.log(document.getElementById('pai').childNodes);
// console.log(document.getElementById('elementoOndeVoceEsta').parentNode);
// console.log(document.getElementById('elementoOndeVoceEsta').parentElement);

/*
parentNode: retorna o nó pai.
parentElement: retorna o elemento pai.
childNodes: retorna um NodeList com todos os nós filhos.
children: retorna um HTMLCollection com todos os elementos filhos.
firstChild: retorna o primeiro nó filho.
firstElementChild: retorna o primeiro elemento filho.
lastChild: retorna o último nó filho.
lastElementChild: retorna o último elemento filho.
nextSibling: retorna o próximo nó.
nextElementSibling: retorna o próximo elemento.
previousSibling: retorna o nó anterior.
previousElementSibling: retorna o elemento anterior.
*/

/* 1. Acesse o elemento elementoOndeVoceEsta.*/
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
/* 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.*/
    elementoOndeVoceEsta.parentElement.style.background = 'red';
/* 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?*/
    const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

    primeiroFilhoDoFilho.innerText = 'Adicionando texto no primeiroFIlhoDoFilho';
/* 4. Acesse o primeiroFilho a partir de pai.*/
    const pai = document.querySelector('#pai');
    
    pai.firstElementChild;
/* 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.*/
    elementoOndeVoceEsta.lastElementChild;
/* 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.*/
    elementoOndeVoceEsta.nextSibling;
/* 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.*/
    elementoOndeVoceEsta.nextElementSibling.style.color = 'white';
/* 8. Agora acesse o terceiroFilho a partir de pai.*/
    pai.lastElementChild.previousElementSibling.style.background = 'green';

