// _runtime/01465_availableTypedArrays.js
import _mod1466 from "metro/01466__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1466.length; num = num + 1) {
    if (typeof global[_mod1466[num]] === "function") {
      items[items.length] = _mod1466[num];
    }
  }
  return items;
}
