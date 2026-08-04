// _runtime/04443_getPolyfill.js

export default function getPolyfill() {
  if (!require(4444) /* properlyBoxed */(map)) {
    map = require(4445) /* map */;
  }
  return map;
};