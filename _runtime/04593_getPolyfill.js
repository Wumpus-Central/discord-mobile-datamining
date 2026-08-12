// _runtime/04593_getPolyfill.js
import { properlyBoxed } from "04594_properlyBoxed.js";
import { map } from "04595_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map;
  }
  return map;
};