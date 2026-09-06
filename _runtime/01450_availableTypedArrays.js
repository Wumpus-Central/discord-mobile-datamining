// === Module 1450: availableTypedArrays ===

// Module 1450 (availableTypedArrays)
import _mod1451 from "module_1451" /* 1451 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1451.length; num = num + 1) {
    if (typeof global[_mod1451[num]] === "function") {
      items[items.length] = _mod1451[num];
    }
  }
  return items;
};