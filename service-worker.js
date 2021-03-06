/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.d115d42d8ff22ff590864c8857e3f496.js"
);

workbox.core.setCacheNameDetails({prefix: "api-projekt"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("https://api.themoviedb.org/3/movie/popular?api_key=fa508fdda8772006644c68416cce99e6&language=en-US&page=1", new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
workbox.routing.registerRoute("https://api.themoviedb.org/3/movie/upcoming?api_key=fa508fdda8772006644c68416cce99e6&language=en-US&page=1", new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
workbox.routing.registerRoute("https://api.themoviedb.org/3/search/movie?api_key=fa508fdda8772006644c68416cce99e6&page=1&query= + search", new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
