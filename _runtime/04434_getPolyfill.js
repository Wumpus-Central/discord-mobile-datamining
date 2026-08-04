// _runtime/04434_getPolyfill.js

export default function getPolyfill() {
  require(4433) /* requirePromise */();
  if (typeof Promise.allSettled === "fileFinishedImporting") {
  } else {
    allSettled = require(4435) /* allSettled */;
  }
  return allSettled;
};