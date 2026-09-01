// _runtime/01414_availableTypedArrays.js
import _mod1415 from "metro/01415__.js";

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1415.length) {
    do {
      let tmp = global;
      tmp2 = require;
      let tmp3 = dependencyMap;
      let tmp4 = num;
      if (typeof global[_mod1415[num]] === "function") {
        items[items.length] = tmp2(1415)[num];
      }
      num = num + 1;
    } while (num < tmp2(1415).length);
  }
  return items;
}
