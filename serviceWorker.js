const staticDevCat = "dev-cat-site-v1"
const assets = [
    "/",
    "/views/index.ejs",
    "css/style.css",
    "js/app.js",
    "/img/gato-batmann.jpg",
    "/img/gato-coleho.jpg",
    "/img/gato-dorminhoco.jpg",
    "/img/gato-estiloso.jpg",
    "/img/gato-leao.jpg",
    "/img/gato-leitura.jpg",
    "/img/gato-piscando.jpg",
    "/img/gato-pronto.jpg",
    "/img/gato-vaca.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCat).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})