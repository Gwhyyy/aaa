'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8d5789bd5653175f6db212b816cd0b5c",
".git/config": "65dc9c991a29fedf4d6cdef777c37a36",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "29934be5d7f1b89583ff2f52104a20e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f2508622a55068ec0924098c3f345e6",
".git/logs/refs/heads/main": "d437271b2e61a9346453b1c6e33db62b",
".git/logs/refs/remotes/origin/main": "280d41819b7bf11aa80233ea1f1d25da",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/b3520d3211e7bd4bc15e4bc9215347accbe418": "ca3eb8403dca69df857b387e94dc80b2",
".git/objects/26/ea73c48e390ce264b6c857f0023578ce809805": "206b284568c2849a5423c41b663d33fd",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/73e08bace6c7fcd188f3ee5191abfe773ebcb1": "d0e95429558d16e261c1cff9904148db",
".git/objects/33/b6be6936aee67cc69dcbdfbf776e2e39dcf1cf": "287562c3ae0edc9619b15a2d124afdad",
".git/objects/34/7600ab1b341a1a95fbf81af6598d0c395b54b9": "f03bc279c273882d0ec9d8e887a05724",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/e49d3e4c2b13f4a94efb9a2593b66069f7ef55": "7466ec2988234c25f37ce98bb4646ed9",
".git/objects/42/bbee18f39092e5440ad40fc9277468ed7503a8": "109d3f1ee4be4f08b75bcc34f20069dc",
".git/objects/43/7f33d494df5e4b1188b955db72cd4ce9c44257": "3183a05f1058efd77900af51a53f0f2f",
".git/objects/4c/d5f6494b9216dfba007c88ada43b9864b89641": "0f605caa8dd53f4427a7929d70738694",
".git/objects/4d/a0b9147b084ffad4040b7b71c068e22d90153d": "be957271f42a66dcc601d182a01c5e1c",
".git/objects/4e/31a3c78b79f68313a58819879201cc3452abe4": "eef98f2c137b0202685e6ee780d4482c",
".git/objects/50/2af75c978d7daf51c8289fc2e83974f8503523": "bf773ec70a69e4b1cb9ef854d9d36f5f",
".git/objects/5d/382b8ab37923f512e9ea77a690c750a344fc0e": "405866dcc84910f9d820b817fd238b6a",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/62/bedf4a3a3f0467649305a4e1f4a242bce856fa": "75a2859ae2020e0451ba05a3ac7b97a1",
".git/objects/75/64a4fc3fe3eb6dbe7212ce73767c5c839ca709": "63d202d7d572ebc3fbf8bbfef71f47c9",
".git/objects/76/6d7397f73da2312c76384d9ba8a41792ec8310": "9f4e4c9ad7cbee7b8f03e37146357184",
".git/objects/76/c9b308d982f0f4db88f03f9b2ed5b67000c149": "1cecf24b62e82382e819231c069dc84d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/37f2632dc5ab07331758b73f94f6d390962209": "8e1204dc157e8f93d73d6cc7a85f6e78",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/17cc2b8a6647e875b2fcfa7bd293f36d6255ec": "5f552a4cbd5a3447acc9aafddf255ce7",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ad/5db957119ddb333c3120c7ea543d9fa02842ca": "85995be9d266442e510d2f3da75df208",
".git/objects/b3/4cba916e1c74084090495ac4142c1ec944374e": "b7643b984482d3ed2e85c904faaed767",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3ccca6f5d2cd80b8fcab9c9107e7b4d9ba7b67": "c6f06716edc5311259c06106a1846764",
".git/objects/c4/314a737f30f466bff3a29370169444dccc804e": "1a83f8f8f5363eff8d2d37a82dfa09e1",
".git/objects/c7/b6b0413651ae5f89a314440df574bc6615f5a7": "560749a7ac22f97ffb9abe4609a9a6e2",
".git/objects/cb/1a1a7954dc4076dbbbed921c4e089714e4fbd2": "b673500794b8a2cb0e796c37f0774223",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/6a94149f36a4921b320c67ff43bcd6d9766eb2": "d1f22d740108ca4480fbfbd27ec454dd",
".git/objects/cc/aa3931a0765e0e6385e8624d4c51696fa28ae1": "37b88e514556d50a98034f6a9f0c6bb1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/e2472523e4dbe724260c6181dc88da62fc2a5a": "e378501540d33a690d0332bc4d960018",
".git/objects/d0/986db3f6a70afa9dc8b840659bd97ef7f15875": "006f64f8cb7f6fd8057b9b1227e3b5d0",
".git/objects/d4/4d8e5672a353902abb24322e3afed2814cf629": "820d77a2c998f2ed4655d6479f2b1424",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/9fc0622e6248f92a1865d17355cd7ec7f5d432": "462a7c4cb3a000c49d9836bf508e8609",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/211a60e44c01052661b9f98079823dc2536282": "8b168020af49a4dcd73e06616e0a797d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/c8b71313cf8ab1851c6f6399b1e77da0b5eef3": "67012ea927e9998a6a29d82184ca927f",
".git/objects/f7/76d966f085629bd1e5959208e07def4ad10324": "90439c4740a9e8b0e859ce6c820e29ae",
".git/objects/f9/b936d708a0767243ce7d8d1ff4aeab121f2d23": "cc7e632a09e66cba0f2c1a4598681cb5",
".git/refs/heads/main": "3a7448f39a143308c86f54bc3120740f",
".git/refs/remotes/origin/main": "3a7448f39a143308c86f54bc3120740f",
"assets/AssetManifest.json": "b90637f5ac2303615e59c4e9f9131b71",
"assets/env": "050439598627baea3206b9a0e9aa7222",
"assets/FontManifest.json": "8427f2c6a5abc3037542b13428a33581",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c556fd6e52652bf1ed13e998edd7501d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_remix/lib/fonts/FlutterRemix.ttf": "7a8463dd48e4ee9c6e5bb57651b77ae4",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a941e1f1e540a6fbcde765ce70cbae49",
"/": "a941e1f1e540a6fbcde765ce70cbae49",
"main.dart.js": "45c49f13bac201735a21ae6c806c03d0",
"manifest.json": "3f7b6970810c548bf60b26058365834d",
"version.json": "4fb11309ea87653af1a5d65a993d8cdc"
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
