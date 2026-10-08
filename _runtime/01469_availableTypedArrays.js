// === Module 1469: availableTypedArrays ===

// Module 1469 (availableTypedArrays)
import _mod1470 from "module_1470" /* 1470 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1470.length; num = num + 1) {
    if (typeof global[_mod1470[num]] === "function") {
      items[items.length] = _mod1470[num];
    }
  }
  return items;
};