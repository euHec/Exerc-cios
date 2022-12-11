const criandoElementos = (elemento, idElemento, posicao) => {
    const criando = document.createElement(elemento);
    criando.id = idElemento;
    posicao.appendChild(criando);
}


//1. Crie um irmão para elementoOndeVoceEsta.
    const pai = document.querySelector('#pai');
    criandoElementos('section', 'irmaoElementoOndeVoceEsta', pai);    
//2. Crie um filho para elementoOndeVoceEsta.
    const filhoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
    criandoElementos('section','filhoOndevoceEsta',filhoOndeVoceEsta);
//3. Crie um filho para primeiroFilhoDoFilho.
    const filhoPrimeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
    criandoElementos('section', 'filhoPrimeiroFilhoDoFilho', filhoPrimeiroFilhoDoFilho);
//4. A partir desse filho criado, acesse terceiroFilho.
    const terceiroFilho = document.querySelector('#filhoPrimeiroFilhoDoFilho');
    console.log(terceiroFilho.parentElement.parentElement.nextElementSibling);


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