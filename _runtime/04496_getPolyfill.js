
export default function getPolyfill() {
  require(4495) /* requirePromise */();
  if (typeof Promise.allSettled === "error") {
  } else {
    allSettled = require(4497) /* allSettled */;
  }
  return allSettled;
};