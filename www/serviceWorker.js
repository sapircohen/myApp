const R2R = "dev-r2r-v1";
const assets = [
    "/",
    "/index.html",
    "/css/assistant-font.css",
    "/css/font-awesome.min.css",
    "/css/jquery.mobile-1.4.5.min.css",
    "/css/material-icons.css",
    "/css/StyleSheet.css",
    "/js/JavaScript.js",
    "/js/AjaxCalls.js",
    "/js/jquery-1.11.1.min.js",
    "/js/jquery.mobile-1.4.5.min.js",
    "/js/lz-string.js",
    "/img/alert.png",
    "/img/alert2.png",
    "/img/alert3.png",
    "/img/about.png",
    "/img/add.png",
    "/img/baby2.png",
    "/img/babyseat.png"
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
  // var messageChannel = new MessageChannel();
  
  // self.addEventListener('push', function(event) {
  //     // parse incoming message
  //     var obj = {};
  //     var pushData = {
  //         image: '../icon.png',
  //         additionalData: {}
  //     };
  //     if (event.data) {
  //         obj = event.data.json();
  //     }
  
  //     console.log(obj);
  
  //     // convert to push plugin API
  //     for (var key in obj) {
  //         if (key === 'title') {
  //             pushData.title = obj[key];
  //         } else if (key === 'message' || key === 'body') {
  //             pushData.message = obj[key];
  //         } else if (key === 'count' || key === 'msgcnt' || key === 'badge') {
  //             pushData.count = obj[key];
  //         } else if (key === 'sound' || key === 'soundname') {
  //             pushData.sound = obj[key];
  //         } else if (key === 'image') {
  //             pushData.image = obj[key];
  //         } else {
  //             pushData.additionalData[key] = obj[key];
  //         }
  //     }
  
  //     event.waitUntil(
  //         self.registration.showNotification(pushData.title, {
  //             body: pushData.message,
  //             icon: pushData.image,
  //             tag: 'r2r'
  //         })
  //     );
  //     const client = await self.clients.get(event.clientId);
  //     if (!client) return;
  //     client.postMessage({
  //       msg: "Hey I just got a fetch from you!",
  //       url: event.request.url
  //     });
  // });
 