// _runtime/01450_availableTypedArrays.js
import _mod1451 from "metro/01451__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1451.length; num = num + 1) {
    if (typeof global[_mod1451[num]] === "function") {
      items[items.length] = _mod1451[num];
    }
  }
  return items;
}
