// _runtime/04396_getPolyfill.js
import { properlyBoxed } from "04397_properlyBoxed.js";
import { map } from "04398_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map;
  }
  return map;
};