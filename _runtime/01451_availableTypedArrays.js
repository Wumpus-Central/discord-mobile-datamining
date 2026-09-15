// === Module 1451: availableTypedArrays ===

// Module 1451 (availableTypedArrays)
import _mod1452 from "module_1452" /* 1452 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1452.length; num = num + 1) {
    if (typeof global[_mod1452[num]] === "function") {
      items[items.length] = _mod1452[num];
    }
  }
  return items;
};