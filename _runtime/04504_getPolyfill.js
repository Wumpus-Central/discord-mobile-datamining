// _runtime/04504_getPolyfill.js
import { properlyBoxed } from "04505_properlyBoxed.js";
import { map } from "04506_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map;
  }
  return map;
};