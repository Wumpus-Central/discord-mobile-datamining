// === Module 4505: getPolyfill ===

// Module 4505 (getPolyfill)

export default function getPolyfill() {
  if (!require(4506) /* properlyBoxed */(map)) {
    map = require(4507) /* map */;
  }
  return map;
};