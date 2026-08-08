// _runtime/04553_getPolyfill.js
import { properlyBoxed } from "04554_properlyBoxed.js";
import { map } from "04555_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map;
  }
  return map;
};