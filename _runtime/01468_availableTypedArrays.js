// === Module 1468: availableTypedArrays ===

// Module 1468 (availableTypedArrays)
import _mod1469 from "module_1469" /* 1469 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  items = [];
  for (let num = 0; num < _mod1469.length; num = num + 1) {
    if (typeof global[_mod1469[num]] === "function") {
      items[items.length] = _mod1469[num];
    }
  }
  return items;
};