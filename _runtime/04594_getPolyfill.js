// _runtime/04594_getPolyfill.js
import { properlyBoxed } from "04595_properlyBoxed.js";
import { map } from "04596_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map;
  }
  return map;
};