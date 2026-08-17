// _runtime/01418_availableTypedArrays.js
import _mod1419 from "module_1419" /* 1419 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1419.length) {
    do {
      let tmp = global;
      tmp2 = require;
      let tmp3 = dependencyMap;
      let tmp4 = num;
      if (typeof global[_mod1419[num]] === "function") {
        items[items.length] = tmp2(1419)[num];
      }
      num = num + 1;
    } while (num < tmp2(1419).length);
  }
  return items;
};