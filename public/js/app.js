const container = document.querySelector(".container")
const cats = [
    { name: "Batman", image: "img/gato-batman.jpg" },
    { name: "Coelho", image: "img/gato-coelho.jpg" },
    { name: "Dorminhoco", image: "img/gato-dorminhoco.jpg" },
    { name: "Estiloso", image: "img/gato-estiloso.jpg" },
    { name: " Leão", image: "img/gato-leao.jpg" },
    { name: " Intelectual", image: "img/gato-leitura.jpg" },
    { name: "Sexy", image: "img/gato-piscando.jpg" },
    { name: "Pronto", image: "img/gato-pronto.jpg" },
    { name: "Vaca", image: "img/gato-vaca.jpg" },
]

const showCats = () => {
    let output = ""
    cats.forEach(
        ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
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