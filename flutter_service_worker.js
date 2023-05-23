'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "40ddf6d444e92404fcde027406696655",
"assets/assets/audio/alphabet_en/kid-a.mp3": "21b86f4bbd730dcbea8ecbde30ead6c8",
"assets/assets/audio/alphabet_en/kid-b.mp3": "66bf8ac64cf67290f77ab347ed9dc917",
"assets/assets/audio/alphabet_en/kid-c.mp3": "73deab297c3f39d1d1168b6d51debf31",
"assets/assets/audio/alphabet_en/kid-d.mp3": "bbcd0faded2761e8b325d8fbe7b80c3c",
"assets/assets/audio/alphabet_en/kid-e.mp3": "926dc60b5d66e820f289a8d82446075e",
"assets/assets/audio/alphabet_en/kid-f.mp3": "503ec566c6b26dba0ff66ac8b6d6e9c8",
"assets/assets/audio/alphabet_en/kid-g.mp3": "01dc977c0064b854da68f9e7cb61e48f",
"assets/assets/audio/alphabet_en/kid-h.mp3": "49385f6759830a67cac949b593248fc9",
"assets/assets/audio/alphabet_en/kid-i.mp3": "6925d5cb8ede08080f07e6d1701296c6",
"assets/assets/audio/alphabet_en/kid-j.mp3": "09c849751febcf30bff5d558a98252c9",
"assets/assets/audio/alphabet_en/kid-k.mp3": "5c7d449f8422a59c4bae816aa89d4c4a",
"assets/assets/audio/alphabet_en/kid-l.mp3": "3508d36679b81d653246b1ea17c3ca00",
"assets/assets/audio/alphabet_en/kid-m.mp3": "d5dbcaa1dafb225d987dea58dfbe9c63",
"assets/assets/audio/alphabet_en/kid-n.mp3": "31e02d2c799f7d3870ec3f226bb7e03f",
"assets/assets/audio/alphabet_en/kid-o.mp3": "28f9277985788d7adcbf73cb649cec5d",
"assets/assets/audio/alphabet_en/kid-p.mp3": "675ac069feb59b4db0e0d87913432b7f",
"assets/assets/audio/alphabet_en/kid-q.mp3": "4f697d17a33aa5626e24788a7d36cede",
"assets/assets/audio/alphabet_en/kid-r.mp3": "2a00e33fb35bf0cfb749643165dd5f15",
"assets/assets/audio/alphabet_en/kid-s.mp3": "2dc2aacbd54b12f58739e92da597dabc",
"assets/assets/audio/alphabet_en/kid-t.mp3": "c8af7186ae1ae9a051afcb97f19306a9",
"assets/assets/audio/alphabet_en/kid-u.mp3": "d15bb6d23bb30b3584c744ca63f82220",
"assets/assets/audio/alphabet_en/kid-v.mp3": "42836a8f1824db68a2838e0486918bc0",
"assets/assets/audio/alphabet_en/kid-w.mp3": "91e83f80045368376f8f63aa178200c2",
"assets/assets/audio/alphabet_en/kid-x.mp3": "e8f26f58ca7903f8a1175eccd39128bb",
"assets/assets/audio/alphabet_en/kid-y.mp3": "6196a3573f7db16bbc703addcf405bfa",
"assets/assets/audio/alphabet_en/kid-z.mp3": "f9a7958689b7ffe07986fad5188c2125",
"assets/assets/audio/Bangla/Consonants/0_1.wav": "7fbea04105fcf4fbb0794498412809e3",
"assets/assets/audio/Bangla/Consonants/0_2.wav": "9ef131b96116fa534fd76c6f553c44cc",
"assets/assets/audio/Bangla/Consonants/10.wav": "0a80629fcdae48ecc1b9d065f4fecd5d",
"assets/assets/audio/Bangla/Consonants/11.wav": "52695a84ea6a4708b70981de845bbb43",
"assets/assets/audio/Bangla/Consonants/12.wav": "faf3409ce2aec37661a313bdf97209d7",
"assets/assets/audio/Bangla/Consonants/13.wav": "6a62e90ad546539c602e5895f24b9fc6",
"assets/assets/audio/Bangla/Consonants/14.wav": "00fb7b92f1d4addc5d017a5aa242e7ff",
"assets/assets/audio/Bangla/Consonants/15.wav": "7f92f3ea8d9ccc8cfc988ff8e7313fe6",
"assets/assets/audio/Bangla/Consonants/16.wav": "43d5ffa1ac31ffbba9a55b2d41d8e7df",
"assets/assets/audio/Bangla/Consonants/17.wav": "9c45099fa195ce3653f7b9fa89768982",
"assets/assets/audio/Bangla/Consonants/18.wav": "8c123be281339f93f6b212b381a86e77",
"assets/assets/audio/Bangla/Consonants/19.wav": "57b5add35563b824ffba1fbd503cbbab",
"assets/assets/audio/Bangla/Consonants/20.wav": "5c8ee5104961667fdafffb38bc286a13",
"assets/assets/audio/Bangla/Consonants/21.wav": "95e1217a7fe12165a812bef55a5fc09b",
"assets/assets/audio/Bangla/Consonants/22.wav": "a6bcfe88c02ec711a7927545d5a85b33",
"assets/assets/audio/Bangla/Consonants/23.wav": "b13bb49d0e5383f17921128a3a70daaa",
"assets/assets/audio/Bangla/Consonants/24.wav": "2c9d16a3dea337e8d0c038d6e3405c1d",
"assets/assets/audio/Bangla/Consonants/25.wav": "6516f29f27a3884d6c747f97831459fa",
"assets/assets/audio/Bangla/Consonants/26.wav": "1cb36baf716903d4966acdd57de15863",
"assets/assets/audio/Bangla/Consonants/27.wav": "f2a223e73becb0fcf94df968047dee7f",
"assets/assets/audio/Bangla/Consonants/28.wav": "59fc8aed7a21f011b14b390c3b023f72",
"assets/assets/audio/Bangla/Consonants/29.wav": "efcacd8ca630cc42a840f00c725493e1",
"assets/assets/audio/Bangla/Consonants/3.wav": "aa57c84859413a0f2686dd62306a2527",
"assets/assets/audio/Bangla/Consonants/30.wav": "997e0affc16790c06b16cfe35a6e4692",
"assets/assets/audio/Bangla/Consonants/31.wav": "8a3ee318b8f874ce57bcb618c8d28ff0",
"assets/assets/audio/Bangla/Consonants/32.wav": "832314e6b894e753dbae9fbe6524bdfd",
"assets/assets/audio/Bangla/Consonants/33.wav": "a715f41a4cf63dccf8a6125e5f053871",
"assets/assets/audio/Bangla/Consonants/34.wav": "97f7741168a96bab9d432f2dc63a2634",
"assets/assets/audio/Bangla/Consonants/35.wav": "ab47b7fc484a4e098ab9f9969fc35f0b",
"assets/assets/audio/Bangla/Consonants/36.wav": "13dbf5413584a90974afad25cdcf779a",
"assets/assets/audio/Bangla/Consonants/37.wav": "b5dfbef9bd8213159f2b0a4f3451592d",
"assets/assets/audio/Bangla/Consonants/38.wav": "419c764ca5fc2833555b381e8cebe326",
"assets/assets/audio/Bangla/Consonants/39.wav": "8a8dfc5f2165ae78b0521d79da8e39fd",
"assets/assets/audio/Bangla/Consonants/4.wav": "7f26a0308ff2f55723fdd393dab98500",
"assets/assets/audio/Bangla/Consonants/5.wav": "299262402565b1d3003f6327d41eda81",
"assets/assets/audio/Bangla/Consonants/6.wav": "540cb7329134de1c20cbc897e56f70c3",
"assets/assets/audio/Bangla/Consonants/7.wav": "18ee862e3767df0ed358df241a26540a",
"assets/assets/audio/Bangla/Consonants/8.wav": "9b9dbc39765d7c9af63e1c5d92894b6e",
"assets/assets/audio/Bangla/Consonants/9.wav": "1de05cb83b11c440dff6af778c221bcf",
"assets/assets/audio/Bangla/Numbers/1.wav": "61fd797929b1dc06df13266cbeade9f4",
"assets/assets/audio/Bangla/Numbers/10.wav": "79c70197447625df086614667ba97c78",
"assets/assets/audio/Bangla/Numbers/2.wav": "2f00dc7540112e2f06f7333f1cc26c08",
"assets/assets/audio/Bangla/Numbers/3.wav": "c8a6276cb2bd0baf5efc3d07dadbe79d",
"assets/assets/audio/Bangla/Numbers/4.wav": "f20fe2b457df7c07e9229d73368d20c5",
"assets/assets/audio/Bangla/Numbers/5.wav": "4895bb8193a666d592e1a631c036cc38",
"assets/assets/audio/Bangla/Numbers/6.wav": "6529a45de9489f7c7a099414772a6ad7",
"assets/assets/audio/Bangla/Numbers/7.wav": "c0775cd99adfbbee5e90c48ad382972d",
"assets/assets/audio/Bangla/Numbers/8.wav": "6a4556ae6abacd4cdc73252cb3ac315e",
"assets/assets/audio/Bangla/Numbers/9.wav": "b2c151313aa1002ed4a0fea631e41e53",
"assets/assets/audio/Bangla/Vowels/1.wav": "0d761f88872c7ef54114de07a21891b1",
"assets/assets/audio/Bangla/Vowels/10.wav": "328fc481456547770fd8ec3737587309",
"assets/assets/audio/Bangla/Vowels/11.wav": "54b6bf2f5768e323509bd45969e7633f",
"assets/assets/audio/Bangla/Vowels/2.wav": "cd1791bd349cb0bfb49f9628fdbc98d7",
"assets/assets/audio/Bangla/Vowels/3.wav": "706e6ea63d01bced1ae4847dc32218e8",
"assets/assets/audio/Bangla/Vowels/4.wav": "ee73305b4f92956b0122cc5aab19dd5d",
"assets/assets/audio/Bangla/Vowels/5.wav": "11c2eb3c80c969fbd08eaba661c7d121",
"assets/assets/audio/Bangla/Vowels/6.wav": "7e3fb10026a8c30833219dd7bcbae5f8",
"assets/assets/audio/Bangla/Vowels/7.wav": "01f98c1053ff1f9128caa38117c06e2b",
"assets/assets/audio/Bangla/Vowels/8.wav": "c6e5f841fb0a171132e1145fe42cfcfc",
"assets/assets/audio/Bangla/Vowels/9.wav": "8855046860e6cb7ac50f1bbb5991e0d7",
"assets/assets/audio/color/black.mp3": "eb6d1bcdb804ad1c58143340be0d5ddd",
"assets/assets/audio/color/blue.mp3": "b2a4b1e242ece3eff12f9851068c4432",
"assets/assets/audio/color/brown.mp3": "039e04569447dc92c99936a8f77585e6",
"assets/assets/audio/color/green.mp3": "9c834346033ff7130115b7733960dc13",
"assets/assets/audio/color/orange.mp3": "d2cbf0bc4bbccfccdcbc16d39ee64130",
"assets/assets/audio/color/pink.mp3": "5b320129f6a7e2a8a59331220af8217c",
"assets/assets/audio/color/purple.mp3": "0e3fba00dcff93d47a7cc502d344ca1e",
"assets/assets/audio/color/red.mp3": "b51ad834e2b6f88f8ed75a0a26d34897",
"assets/assets/audio/color/white.mp3": "3fe452fffa706f5e45f33633d7b5932c",
"assets/assets/audio/color/yellow.mp3": "2922e91b7aadbdb20eec8c73d739941e",
"assets/assets/audio/intro/intro_sound.mp3": "bef0446751aa600c574270bf0135664f",
"assets/assets/audio/intro/mystical-wind-chimes.mp3": "06526e1ab6e07f12b10f3706d619bca4",
"assets/assets/audio/numeric_en/kid-1.mp3": "84901e49fa9a73085a7cc3a4c0d58b86",
"assets/assets/audio/numeric_en/kid-10.mp3": "caa489384b35b0130b3bc27fa2508cff",
"assets/assets/audio/numeric_en/kid-2.mp3": "e284f14d40cd4a6103bba9a539cd82e4",
"assets/assets/audio/numeric_en/kid-3.mp3": "e4fd4db14c4e362aab73e9cf4d450387",
"assets/assets/audio/numeric_en/kid-4.mp3": "1e302343a0d9d4050e5dac0af771fbcb",
"assets/assets/audio/numeric_en/kid-5.mp3": "480e789a0870c96a864f23c89d1ff050",
"assets/assets/audio/numeric_en/kid-6.mp3": "c32823e00ce428be25dde181dcd92dfa",
"assets/assets/audio/numeric_en/kid-7.mp3": "6542fff4339eda3ea0be36ec52841d06",
"assets/assets/audio/numeric_en/kid-8.mp3": "7273035e890a86e7b5ef2b2b1b43e595",
"assets/assets/audio/numeric_en/kid-9.mp3": "02528d5fb28d8d6476f6e719b894d5a5",
"assets/assets/audio/screen_transition/pop-page-back-chime.wav": "9abf44255a379932b493d362a0019ac4",
"assets/assets/audio/screen_transition/push-page-forward-single-chime.wav": "bbe77db150c59599b2935d6cbad0e767",
"assets/assets/audio/shapes/circle.mp3": "d3cb7843d89074de3cd61e43d78005df",
"assets/assets/audio/shapes/triangle.mp3": "cce9e469ca66763de0a4a1a6364e6c85",
"assets/assets/data/alphabets.json": "088f0ef52d287c63f268862927b1efdb",
"assets/assets/data/colors.json": "01371d62fb11bc73a19f47fe08ca62e1",
"assets/assets/data/numbers.json": "77b54eade944598e058049de2c2a144b",
"assets/assets/fonts/AdorshoLipi.ttf": "02627cbefa5b253538522c83b06f84a4",
"assets/assets/fonts/CabinSketch-Bold.ttf": "aaa30c6d03ddbf4cfd7077d3b2f109ed",
"assets/assets/fonts/CabinSketch-Regular.ttf": "dc97f34ade1b590e1688b6803b1a1f03",
"assets/assets/fonts/CharuChandan3D-Regular.ttf": "ae84d15c4e503b88a7c8ecf3eb945965",
"assets/assets/images/2x/bg-bottom.png": "3008903b82fbbf694759004b47874496",
"assets/assets/images/2x/bg-top.png": "4337dfdd9c34e50f3cd04a6fbbbe9a4b",
"assets/assets/images/3x/bg-bottom.png": "020f2aac03a9b56f7b27b58a6235a184",
"assets/assets/images/3x/bg-top.png": "fa536bc28f7930263d73f11dd011a18a",
"assets/assets/images/bg-bottom.png": "4c26e5c54f1878195e1cc80bdf5539fc",
"assets/assets/images/bg-stars.png": "3e2afc6416b609ede86b3d52a2aa92ab",
"assets/assets/images/bg-top.png": "b11376f4c683af0804c4e4c981390aa3",
"assets/assets/images/rocket.png": "2ccbf609e59c7ebf740f9538eed6bdf0",
"assets/FontManifest.json": "d36ede0fe271d5d50bf8f6a5f45e6e7e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "3b86bebac6ac5c0c464a2b5107b72f8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8349a8525db7d54b75f1b4eb41727704",
"/": "8349a8525db7d54b75f1b4eb41727704",
"main.dart.js": "854ed0c500c7e72f81d4bc706c1824af",
"manifest.json": "9038020240d86a4bf9ddd315bddbf30a",
"version.json": "da9b0b5890d74c5fea7d6dfaf47fe090"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
