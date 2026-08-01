// === Module 4443: getPolyfill ===

// Module 4443 (getPolyfill)

export default function getPolyfill() {
  if (!require(4444) /* properlyBoxed */(map)) {
    map = require(4445) /* map */;
  }
  return map;
};