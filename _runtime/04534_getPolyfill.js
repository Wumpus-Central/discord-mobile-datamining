import { properlyBoxed } from "04535_properlyBoxed.js";
import { map } from "04536_map.js";
// _runtime/04534_getPolyfill.js

export default function getPolyfill() {
  if (!properlyBoxed /* properlyBoxed */(map)) {
    map = map /* map */;
  }
  return map;
};