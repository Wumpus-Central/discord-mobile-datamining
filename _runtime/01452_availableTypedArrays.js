// === Module 1452: availableTypedArrays ===

// Module 1452 (availableTypedArrays)
import _mod1453 from "module_1453" /* 1453 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1453.length; num = num + 1) {
    if (typeof global[_mod1453[num]] === "function") {
      items[items.length] = _mod1453[num];
    }
  }
  return items;
};