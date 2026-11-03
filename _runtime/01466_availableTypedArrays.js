// === Module 1466: availableTypedArrays ===

// Module 1466 (availableTypedArrays)
import _mod1467 from "module_1467" /* 1467 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  items = [];
  for (let num = 0; num < _mod1467.length; num = num + 1) {
    if (typeof global[_mod1467[num]] === "function") {
      items[items.length] = _mod1467[num];
    }
  }
  return items;
};