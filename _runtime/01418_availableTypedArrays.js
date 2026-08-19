// === Module 1418: availableTypedArrays ===

// Module 1418 (availableTypedArrays)
import _mod1419 from "module_1419" /* 1419 */;

if (typeof globalThis !== "undefined") {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  for (let num = 0; num < _mod1419.length; num = num + 1) {
    if (typeof global[_mod1419[num]] === "function") {
      items[items.length] = _mod1419[num];
    }
  }
  return items;
};