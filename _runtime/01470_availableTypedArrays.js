// _runtime/01470_availableTypedArrays.js
import _mod1471 from "metro/01471__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1471.length; num = num + 1) {
    if (typeof global[_mod1471[num]] === "function") {
      items[items.length] = _mod1471[num];
    }
  }
  return items;
}
