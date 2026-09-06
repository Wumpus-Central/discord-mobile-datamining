// _runtime/01450_availableTypedArrays.js
import _mod1451 from "metro/01451__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1451.length) {
    do {
      tmp2 = require;
      if (typeof global[_mod1451[num]] === "function") {
        items[items.length] = tmp2(1451)[num];
      }
      num = num + 1;
    } while (num < tmp2(1451).length);
  }
  return items;
}
