// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Declaración de variables
let listaAmigos = [];
let lista = document.getElementById('listaAmigos');
let botonSortear = document.getElementById('botonSortear');
let botonReiniciar = document.getElementById('botonReiniciar');
botonReiniciar.style.display = 'none';                             //Al comenzar, el botonReiniciar está oculto


// Función para agregar nuevo nombre a la lista
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();  //Para verificar que haya texto válido en la entrada
    if (nombre === ''){
        alert('Por favor ingrese un nombre válido');
    }
    else{
        actualizarLista(nombre);                                  //Llama a la función que actualizará la lista
    }
}

// Función para actualizar la lista de nombres
function actualizarLista(nombre){
    
        if(listaAmigos.includes(nombre)){                           //Evita la repetición de nombres
            alert('¡Ese amigo ya se encuentra en la lista!');
        }
        else{
            let nuevoNombre = document.createElement('li');       //Crea un nuevo elemento <li> para la lista de amigos
            nuevoNombre.textContent = nombre;
            lista.appendChild(nuevoNombre);
            listaAmigos.push(nombre);                             //También lo agrega al arreglo listaAmigos
            document.getElementById("amigo").value = "";
        }
}

//Función para elegir aleatoriamente un nombre
function sortearAmigo(){
    if(listaAmigos.length === 0){                                //Verifica que la lista no está vacía
        alert('¡Aún no hay amigos para sortear!');
    }
    else{
    let indiceGanador = Math.floor(Math.random()*listaAmigos.length);        //Elige un índice al azar
    document.getElementById("amigo").value = "";                             
    lista.innerHTML = '';
    resultado.innerHTML = `El amigo sorteado es ${listaAmigos[indiceGanador]}`;     //Muestra el resultado
    botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear otra vez'; //Permite hacer un nuevo sorteo con los mismos nombres
    botonReiniciar.style.display = 'flex';   //El botón reiniciar aparece permitiendo reiniciar el juego
    }
}

//Función para reiniciar el juego
function reiniciar(){              //Reinicia los valores al estado original
    listaAmigos = [];
    botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
    botonReiniciar.style.display = 'none';
    lista.style.color = 'black';
    lista.innerHTML = '';
    resultado.innerHTML = '';
}