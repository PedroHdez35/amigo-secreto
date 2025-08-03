// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let lista = document.getElementById('listaAmigos');
let botonSortear = document.getElementById('botonSortear');
let botonReiniciar = document.getElementById('botonReiniciar');
botonReiniciar.style.display = 'none';

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === ''){
        alert('Por favor ingrese un nombre válido');
    }
    else{
        actualizarLista(nombre);
    }
}

function actualizarLista(nombre){
    
        if(listaAmigos.includes(nombre)){
            alert('¡Ese amigo ya se encuentra en la lista!');
        }
        else{
            let nuevoNombre = document.createElement('li');
            nuevoNombre.textContent = nombre;
            lista.appendChild(nuevoNombre);
            listaAmigos.push(nombre);
            document.getElementById("amigo").value = "";
            console.log(listaAmigos);
        }
}

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert('¡Aún no hay amigos para sortear!');
    }
    else{
    let cantidadJugadores = listaAmigos.length;
    let indiceGanador = Math.floor(Math.random()*listaAmigos.length);
    document.getElementById("amigo").value = "";
    lista.style.color = 'green';
    lista.innerHTML = `El amigo sorteado es ${listaAmigos[indiceGanador]}`;
    botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear otra vez';
    botonReiniciar.style.display = 'flex';
    //let ganador = listaAmigos[indiceGanador];
    //alert(ganador);
    //alert(`Son ${cantidadJugadores}, aleatoriamente elegí a ${(listaAmigos[ganador])}`);
    }
}

function reiniciar(){
    listaAmigos = [];
    botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
    botonReiniciar.style.display = 'none';
    lista.style.color = 'black';
    lista.innerHTML = '';
}