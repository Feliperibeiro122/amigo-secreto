let amigos = [];

function adicionar() {
    let adicionarAmigo = document.getElementById('nome-amigo');
    if (adicionarAmigo.value == '') {
        alert('Informe o nome do amigo.');
        return;
    }

    if(amigos.includes(adicionarAmigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(adicionarAmigo.value)
    if (lista.textContent == '') {
        lista.textContent = adicionarAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + adicionarAmigo.value;
    }
    adicionarAmigo.value = '';
    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!')
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
        
    }
}

function excluirAmigo(index) {
    amigos.splice(index,1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for(let i = 0; i< amigos.length;i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click',function() {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}