// === Module 1472: availableTypedArrays ===

// Module 1472 (availableTypedArrays)
import _mod1473 from "module_1473" /* 1473 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1473.length; num = num + 1) {
    if (typeof global[_mod1473[num]] === "function") {
      items[items.length] = _mod1473[num];
    }
  }
  return items;
};