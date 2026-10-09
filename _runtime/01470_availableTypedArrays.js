// === Module 1470: availableTypedArrays ===

// Module 1470 (availableTypedArrays)
import _mod1471 from "module_1471" /* 1471 */;

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
};