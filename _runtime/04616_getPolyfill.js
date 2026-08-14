// _runtime/04616_getPolyfill.js
import { properlyBoxed } from "04617_properlyBoxed.js";
import { map } from "04618_map.js";

export default function getPolyfill() {
  if (!properlyBoxed(map)) {
    map = map;
  }
  return map;
};