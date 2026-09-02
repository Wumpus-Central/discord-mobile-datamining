// === Module 1413: availableTypedArrays ===

// Module 1413 (availableTypedArrays)
import _mod1414 from "module_1414" /* 1414 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  let tmp2;
  const items = [];
  let num = 0;
  if (0 < _mod1414.length) {
    do {
      let tmp = global;
      tmp2 = require;
      let tmp3 = dependencyMap;
      let tmp4 = num;
      if (typeof global[_mod1414[num]] === "function") {
        items[items.length] = tmp2(1414)[num];
      }
      num = num + 1;
    } while (num < tmp2(1414).length);
  }
  return items;
};