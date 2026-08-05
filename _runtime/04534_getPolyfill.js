// _runtime/04534_getPolyfill.js
import { properlyBoxed } from "04535_properlyBoxed.js";
import { map } from "04536_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map;
  }
  return map;
};