// minha solução inicial:

// function trocarCorPrimeiroQuadrado(){
//     let todosOsQuadrados = document.getElementsByClassName('quadrado');

//     console.log(todosOsQuadrados);

//     let primeiroQuadrado = todosOsQuadrados[0];

//     console.log('primeiroQuadrado', primeiroQuadrado)

//     primeiroQuadrado.style.backgroundColor = 'yellow';
// }

//==========================================================================//


//Correção:

const btnTrocaCor = document.getElementById("btn-troca-cor");

const primeiroQuadrado= document.querySelector(".quadradoAzul");

btnTrocaCor.addEventListener("click", trocarCor);

function trocarCor() {
  primeiroQuadrado.classList.remove("quadradoAzul");
  primeiroQuadrado.classList.add("quadradoAmarelo");
}
