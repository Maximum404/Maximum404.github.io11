'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "61ecf05a989118fe355d0c64172d6bfe",
"assets/AssetManifest.bin.json": "b92e9b2b144482eccfeb9a3dd01654a1",
"assets/AssetManifest.json": "cb3c686f6019291cd57fd571b78507da",
"assets/assets/fonts/axiforma-medium.ttf": "e9b02a989779c98e3ec324b83514babc",
"assets/assets/fonts/axiforma-regular.ttf": "d882de2cc508ece40b39e18c754dd9f3",
"assets/assets/fonts/axiforma-semibold.ttf": "3de306e5a45743d4f3bd02ca3f7024ec",
"assets/assets/images/boost/3d-mini-battery.png": "40ad5bfc63ddfb86cf5a24e8b9d59e58",
"assets/assets/images/boost/3d-mini-gamepad.png": "2d22041b33ea2d3f3c32368b7ad9b125",
"assets/assets/images/boost/3d-mini-gamepad.svg": "ca73a0fc2641c0f5700d71a5192e3c55",
"assets/assets/images/boost/app-shell-svgrepo-com.svg": "3dc16f210bfefb84de237a710bd10a57",
"assets/assets/images/boost/fire.png": "d4ce31f3c25669c984ba0668e950f859",
"assets/assets/images/boost/guru.png": "b6f7ff773a016b2bff7e43c7322d243e",
"assets/assets/images/boost/lightning.png": "98a75ce93fb057bc9073ddeadd6c97b9",
"assets/assets/images/boost/silver%2520lightning.png": "fcd92220b39607d50a832c8b6cfa9786",
"assets/assets/images/boost/tank.png": "eed6bea34fd530a35f44e6f72dcd0279",
"assets/assets/images/bottom_panel/bg_1.png": "41cef63845b8de9b7b250908c2519b19",
"assets/assets/images/bottom_panel/bg_2.png": "822a870c9e2804695cde5c9e179888d8",
"assets/assets/images/bottom_panel/btn_1_1.png": "402dc3676df2fb9b3e25668b3934946d",
"assets/assets/images/bottom_panel/btn_1_2.png": "23ff31444db49f4d13a98d631a174b60",
"assets/assets/images/bottom_panel/btn_2_1.png": "8d6a59b49230c54a57660b97744806d8",
"assets/assets/images/bottom_panel/btn_2_2.png": "da4a5d3ec4538fdf4d2d1d13d45752be",
"assets/assets/images/bottom_panel/btn_3_1.png": "0389b8a0b94368055fc81e4cd9be171b",
"assets/assets/images/bottom_panel/btn_3_2.png": "e9c32076676eb797f58ae14b9e702f29",
"assets/assets/images/bottom_panel/btn_4_1.png": "6020e9adce36db10ac68ae0e6507e83d",
"assets/assets/images/bottom_panel/btn_4_2.png": "636a220a0a28fba0579049f4f7d3b6ce",
"assets/assets/images/bottom_panel/btn_5_1.png": "0c38d97b40eeb0f0072e901ad10ed32f",
"assets/assets/images/bottom_panel/btn_5_2.png": "151e294af16d98c8a39fd3cb89432b65",
"assets/assets/images/bottom_panel/ref.png": "9cd91d54d30ea46be3c56002aa7a1eec",
"assets/assets/images/bottom_panel/ref_btn1.png": "fde2dcf822020231d736a976a93a572b",
"assets/assets/images/bottom_panel/stats%2520off.png": "fffbd849ec8b9839cc3239de6d8820f3",
"assets/assets/images/btn_0.png": "5fc0c5e17620a10a0d20bf08285b9340",
"assets/assets/images/copy.svg": "8e43ce55cbddb06eea199c470c009549",
"assets/assets/images/cup.png": "8d58427ef417c087ada801d993ebdbd7",
"assets/assets/images/enerje.png": "9b2e3c1ab1bc9544dffd9b3e3635bfd8",
"assets/assets/images/enerje.svg": "2e17252bd8438d0b038387ec3a91ffaf",
"assets/assets/images/fon.png": "5ef632296ce6eb3fa8016d77eec8f3ec",
"assets/assets/images/fon.svg": "61b55042f36263c7b5f89f746c43045d",
"assets/assets/images/Group%25206.png": "6c274fa4fade5a07cce7bd6f83e3b6f8",
"assets/assets/images/Group%252061.png": "72a68c201370ad4a44643db376c890f4",
"assets/assets/images/Group%252062.png": "6973fb94d6503cf7ebdb4f3ecf29b9c5",
"assets/assets/images/Group%252063.png": "17f7da052ba13ddb576177fb5a0cf292",
"assets/assets/images/Group%252064.png": "87cbcb124807e137b99560a1ea2ccc73",
"assets/assets/images/legendary.png": "6ddad965ffd0ab32ce0cdf97e557dfff",
"assets/assets/images/new/%25D0%25BC%25D0%25B8%25D0%25BD%25D0%25B8%2520%25D0%25BC%25D0%25BE%25D0%25BD%25D0%25B5%25D1%2582%25D0%25B0.png": "69b69d09d43938479645cc6de783aacc",
"assets/assets/images/new/coin.png": "c253822f398a97e262ee6b0354455735",
"assets/assets/images/new/copy.svg": "53d117a59cb2d173c60c6a8bd049cfa7",
"assets/assets/images/new/energy-limit.png": "ae479772e434a388d35ba5d7973adc92",
"assets/assets/images/new/fire%2520(1).png": "7255461d7a31fc2d4681c2c7470a2510",
"assets/assets/images/new/fon.png": "0158b47911ecf4bacdcedcf9dab875bb",
"assets/assets/images/new/friends.png": "51d7bce9ee7b5e7c712bdc58341ad17c",
"assets/assets/images/new/gain.png": "9a3278a7524861148095f7fbdaba24db",
"assets/assets/images/new/Legendary.png": "b66b82d95c28be2c4def0e543e0f1f6b",
"assets/assets/images/new/lightning.png": "7e1aee4408b8d8bc0594e767822cc2a4",
"assets/assets/images/new/medal%2520(1).png": "8530db0723f14a3f92cff7ec2309e6f5",
"assets/assets/images/new/medal%2520(2).png": "7dd932f9a6ced1e085bc9f2f3d1137d7",
"assets/assets/images/new/medal%2520(3).png": "aa9058055ddd0fa6883139a0dad6a8df",
"assets/assets/images/new/medal%2520(4).png": "d250582bc3015faa697772d89cb34d94",
"assets/assets/images/new/medal.png": "6c83800848aff87058a76a1e3f2269ea",
"assets/assets/images/new/pie-chart%2520(1).png": "9c5986aa01af550208316a7793bf6bd6",
"assets/assets/images/new/recharging-speed.png": "92261af50a16215d64ee69d4ff33fc67",
"assets/assets/images/new/tapping-on-the-screen.png": "c4dcec472896f04521a9d2214ac96d62",
"assets/assets/images/new/task%2520(1).png": "09f546f2ba6cfe60d474a8b4cb87ffef",
"assets/assets/images/new/Vector.png": "50957eda6dfe3ca09789bd01e1851ee3",
"assets/FontManifest.json": "84256009e192cc711eb2d5116b0a098d",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a78d2ebc316ab17b1dc8ff4d4e1c226e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a8ba7d93f8e7762226fc962e50c9ba80",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cf0747b188079db16e0e901cdd8a33d4",
"/": "cf0747b188079db16e0e901cdd8a33d4",
"main.dart.js": "c3d84d60a335815224099fc6ab723dc5",
"manifest.json": "aa0c3fbdc7aaa3b7d15bc59a656478fb",
"version.json": "006d350fb238949f7c617ccca89f6dc0"};
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
