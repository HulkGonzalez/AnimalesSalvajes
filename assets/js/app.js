import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/animal.js";

let animalesObjetos = {};
let animalArrayCards = [];

(async () => {
  try {
    const resp = await fetch("animales.json");
    const {animales} = await resp.json();
    animales.forEach(item => {
        animalesObjetos[item.name] = item
    })
  } catch (err) {
    console.log(err);
  }
})();

const formulario = document.getElementById("formulario");
const animales = document.getElementById("animales");
const animal = document.getElementById("animal");
const edad = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const preview = document.getElementById("preview");

animal.addEventListener("change", event => {
    preview.innerHTML = `<img src="assets/imgs/${animalesObjetos[event.target.value].imagen}" alt="" class="img-card">`;
})

const pintarAnimales = () => {
    animales.innerHTML = ""; animalArrayCards.forEach((item) => {
        animales.innerHTML += `
        <article class="card card-animal"><img src="assets/imgs/${item.img}" alt="" class="card-img-top">
            <div class="card-body">
                <h5>${item.nombre}</h5>
                <audio class="player" src="./assets/sounds/${item.sonido}" controls></audio>
            </div>
        </article>`;
    });
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if(animal.value === "Leon"){
      const leon = new Leon(
        animal.value,
        edad.value,
        animalesObjetos[animal.value].imagen,
        comentarios.value,
        animalesObjetos[animal.value].sonido
      )
      animalArrayCards.push(leon) 
      console.log(leon)  
  }

  if(animal.value === "Lobo"){
    const lobo = new Lobo (
        animal.value,
        edad.value,
        animalesObjetos[animal.value].imagen,
        comentarios.value,
        animalesObjetos[animal.value].sonido
    )
    animalArrayCards.push(lobo)
    console.log(lobo) 
  }

  if(animal.value === "Oso"){
      const oso = new Oso(
          animal.value,
          edad.value,
          animalesObjetos[animal.value].imagen,
          comentarios.value,
          animalesObjetos[animal.value].sonido
      )
      animalArrayCards.push(oso)
      console.log(oso)
  }

  if(animal.value === "Serpiente"){
      const serpiente = new Serpiente(
          animal.value,
          edad.value,
          animalesObjetos[animal.value].imagen,
          comentarios.value,
          animalesObjetos[animal.value].sonido
      )
      animalArrayCards.push(serpiente)
      console.log(serpiente)
  }
  
  if(animal.value === "Aguila"){
      const aguila = new Aguila(
          animal.value,
          edad.value,
          animalesObjetos[animal.value].imagen,
          comentarios.value,
          animalesObjetos[animal.value].sonido
      )
      animalArrayCards.push(aguila)
      console.log(aguila)
  }
  
    pintarAnimales()
    console.log(animalArrayCards)
});