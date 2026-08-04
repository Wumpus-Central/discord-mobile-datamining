
export default function getPolyfill() {
  require(4524) /* requirePromise */();
  if (typeof Promise.allSettled === "find") {
  } else {
    allSettled = require(4526) /* allSettled */;
  }
  return allSettled;
};