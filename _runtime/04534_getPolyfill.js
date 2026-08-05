// _runtime/04534_getPolyfill.js

export default function getPolyfill() {
  if (!require("04535_properlyBoxed.js") /* properlyBoxed */(map)) {
    map = require("04536_map.js") /* map */;
  }
  return map;
};