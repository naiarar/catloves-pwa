const container = document.querySelector(".container")
const cats = [
    { name: " I am a ", caption: "Avocato", image: "img/gato-batmann.jpg" },
    { name: " I am a ", caption: "Bunny", image: "img/gato-coelho.jpg" },
    { name: " I am ", caption: "Sherlock Holmes", image: "img/gato-dorminhoco.jpg" },
    { name: " I am a ", caption: "Rapper", image: "img/gato-estiloso.jpg" },
    { name: " I am a ", caption: "Bear", image: "img/gato-leao.jpg" },
    { name: " I am a ", caption: "Pig", image: "img/gato-leitura.jpg" },
    { name: " I am a ", caption: "Frog", image: "img/gato-piscando.jpg" },
    { name: " I am a ", caption: "Flower", image: "img/gato-pronto.jpg" },
    { name: " I am a ", caption: "Cow", image: "img/gato-vaca.jpg" },
]

const showCats = () => {
    let output = ""
    cats.forEach(
        ({ name, caption, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <h2 class="card--caption">${caption}</h2>
                  <a class="card--link" href="#">More</a>
                </div>
                `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCats)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}