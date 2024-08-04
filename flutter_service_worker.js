'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "d222ec88ef975116c75e259d5bbfbde7",
"assets/AssetManifest.bin": "8712f9ea8d3415bd1d939888dfa5e3e3",
"assets/AssetManifest.bin.json": "13bc23beb73597a332387e78a30521f4",
"assets/AssetManifest.json": "a6175000ab71257c9ef56efb05ac2d1b",
"assets/assets/fonts/jost/Jost-Black.ttf": "a0fa30eaedf7669b11308fc1b8e191ab",
"assets/assets/fonts/jost/Jost-BlackItalic.ttf": "168bf2d30182877e85fe070b0c56b447",
"assets/assets/fonts/jost/Jost-Bold.ttf": "b7264d92bf53323431379fa41e88351c",
"assets/assets/fonts/jost/Jost-BoldItalic.ttf": "c4205049274bee09cffa91899bf7f37a",
"assets/assets/fonts/jost/Jost-ExtraBold.ttf": "1e76776be83c5c73ad0ed25eb31e21e9",
"assets/assets/fonts/jost/Jost-ExtraBoldItalic.ttf": "4a39c74e8e57b7cd3d3156cf7b698608",
"assets/assets/fonts/jost/Jost-ExtraLight.ttf": "226694424ed807bb61a012aeac441dd9",
"assets/assets/fonts/jost/Jost-ExtraLightItalic.ttf": "12d6ac2d4a0731b77b2377655891aa8a",
"assets/assets/fonts/jost/Jost-Italic.ttf": "2302db2d0563c508e40a966b37e210c8",
"assets/assets/fonts/jost/Jost-Light.ttf": "a9acd0cea659e0b283a84fc489f81e8b",
"assets/assets/fonts/jost/Jost-LightItalic.ttf": "ee9d056cc8d7341e6beff11010953140",
"assets/assets/fonts/jost/Jost-Medium.ttf": "7e1fece31d93f217570805dbb0dbc786",
"assets/assets/fonts/jost/Jost-MediumItalic.ttf": "781792dfbf354eb583fa02d0b2b0820c",
"assets/assets/fonts/jost/Jost-Regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/assets/fonts/jost/Jost-SemiBold.ttf": "9f5eb520cce314ccd9c9ccf1a2a9ad48",
"assets/assets/fonts/jost/Jost-SemiBoldItalic.ttf": "435320835d15db8e8964ec4685272401",
"assets/assets/fonts/jost/Jost-Thin.ttf": "003e00442696a075f032ae244738d5d3",
"assets/assets/fonts/jost/Jost-ThinItalic.ttf": "57ac354dc0d30de178482175be144e87",
"assets/assets/icons/back.svg": "d7e51dd1d060cab65eaa9e951a5dac9e",
"assets/assets/icons/bell.svg": "dc5490923b4f4bd0ca9c7df16579144d",
"assets/assets/icons/location.png": "2e3a03d6f3cea6edfb3059798c7881b4",
"assets/assets/icons/location.svg": "dc9e90d465f18598c53688646c28e4b3",
"assets/assets/icons/notification.svg": "dc5490923b4f4bd0ca9c7df16579144d",
"assets/assets/icons/share.svg": "957609cb91622f81870cd8a543203890",
"assets/assets/icons/social_media/instagram.svg": "d9f79f8657bea7b9de1b85776f9e00ec",
"assets/assets/icons/social_media/pinterest.svg": "23b38f7a3b806361309664eae16bc0aa",
"assets/assets/icons/social_media/snap_chat.png": "ec1bbf47d57852fd9eefd4a4582581c7",
"assets/assets/icons/social_media/tik_tok.svg": "849b0eef9fc44d660ff204b0c856e864",
"assets/assets/icons/social_media/x.svg": "60efd18ae075367846a7ae33fbdcf704",
"assets/assets/icons/social_media/youtube.svg": "0fa0ed5a3bcf53dad19919974806a08c",
"assets/assets/images/avatar.png": "01eda5f7a0484ccb3e1a45e4a565d986",
"assets/assets/images/logo.png": "02ce168184589eb4cf7966c38ba3f3c5",
"assets/FontManifest.json": "829b0aaa348f97d96fa22875725357e8",
"assets/fonts/MaterialIcons-Regular.otf": "aaf0db71a6c1156e7d8c461c26d7a5f2",
"assets/NOTICES": "c25b1a829c35a80fa1a95510bdd4a6a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1c9483c6c436810d9590a731ebb71992",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "02ce168184589eb4cf7966c38ba3f3c5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b55ad7f94e5df04519327b305ba5b77c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8cce98cacb0bcfba3878b64ea5fd86e5",
"/": "8cce98cacb0bcfba3878b64ea5fd86e5",
"main.dart.js": "f69144e002044a3de50684a00f50bdc3",
"manifest.json": "0257cfc3af7717ee8a3683e6261922e1",
"version.json": "4543cc0a9409f25ae735a88ba5b35dd3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
