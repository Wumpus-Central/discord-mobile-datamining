// _runtime/01451_availableTypedArrays.js
import _mod1452 from "metro/01452__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1452.length; num = num + 1) {
    if (typeof global[_mod1452[num]] === "function") {
      items[items.length] = _mod1452[num];
    }
  }
  return items;
}
