
export default function getPolyfill() {
  if (!require(4535) /* properlyBoxed */(map)) {
    map = require(4536) /* map */;
  }
  return map;
};