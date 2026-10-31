// === Module 1464: availableTypedArrays ===

// Module 1464 (availableTypedArrays)
import _mod1465 from "module_1465" /* 1465 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1465.length; num = num + 1) {
    if (typeof global[_mod1465[num]] === "function") {
      items[items.length] = _mod1465[num];
    }
  }
  return items;
};