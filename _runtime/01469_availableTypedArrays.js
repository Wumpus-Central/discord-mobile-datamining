// _runtime/01469_availableTypedArrays.js
import _mod1470 from "metro/01470__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1470.length; num = num + 1) {
    if (typeof global[_mod1470[num]] === "function") {
      items[items.length] = _mod1470[num];
    }
  }
  return items;
}
