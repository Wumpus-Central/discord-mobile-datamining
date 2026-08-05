// _runtime/04525_getPolyfill.js

export default function getPolyfill() {
  require("04524_requirePromise.js") /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require("04526_allSettled.js") /* allSettled */;
  }
  return allSettled;
};