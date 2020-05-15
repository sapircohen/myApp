const R2R = "dev-r2r-v1";
const assets = [
    "/",
    "./index.html",
    "./css/assistant-font.css",
    "./css/font-awesome.min.css",
    "./css/jquery.mobile-1.4.5.min.css",
    "./css/material-icons.css",
    "./css/StyleSheet.css",
    "./js/JavaScript.js",
    "./js/AjaxCalls.js",
    "./js/jquery-1.11.1.min.js",
    "./js/jquery.mobile-1.4.5.min.js",
    "./js/lz-string.js",
    "./img/alert.png",
    "./img/alert2.png",
    "./img/alert3.png",
    "./img/about.png",
    "./img/add.png",
    "./img/baby2.png",
    "./img/babyseat.png"
  ]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
      caches.open(R2R).then(cache => {
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
