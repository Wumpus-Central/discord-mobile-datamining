// _runtime/01467_availableTypedArrays.js
import _mod1468 from "metro/01468__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  items = [];
  for (let num = 0; num < _mod1468.length; num = num + 1) {
    if (typeof global[_mod1468[num]] === "function") {
      items[items.length] = _mod1468[num];
    }
  }
  return items;
}
