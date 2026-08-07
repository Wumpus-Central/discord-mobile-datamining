// _runtime/04551_getPolyfill.js
import { properlyBoxed } from "04552_properlyBoxed.js";
import { map } from "04553_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map;
  }
  return map;
};