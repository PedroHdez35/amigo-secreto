// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let lista = document.getElementById('listaAmigos');

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === ''){
        alert('Por favor ingrese un nombre válido');
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

function actualizarLista(){

}

function sortearAmigo(){
    let cantidadJugadores = listaAmigos.length;
    let indiceGanador = Math.floor(Math.random()*listaAmigos.length);
    lista.style.color = 'green';
    lista.innerHTML = `El amigo sorteado es ${listaAmigos[indiceGanador]}`;
    //let ganador = listaAmigos[indiceGanador];
    //alert(ganador);
    //alert(`Son ${cantidadJugadores}, aleatoriamente elegí a ${(listaAmigos[ganador])}`);
}