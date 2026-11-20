// === Module 1467: availableTypedArrays ===

// Module 1467 (availableTypedArrays)
import _mod1468 from "module_1468" /* 1468 */;

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
};