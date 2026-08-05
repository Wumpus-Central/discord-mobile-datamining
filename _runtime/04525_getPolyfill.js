// _runtime/04525_getPolyfill.js

export default function getPolyfill() {
  require(4524) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4526) /* allSettled */;
  }
  return allSettled;
};