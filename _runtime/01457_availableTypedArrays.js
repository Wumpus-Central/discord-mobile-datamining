// === Module 1457: availableTypedArrays ===

// Module 1457 (availableTypedArrays)
import _mod1458 from "module_1458" /* 1458 */;

if (typeof globalThis !== "undefined") {
  global = globalThis;
}

export default function availableTypedArrays() {
  let num;
  const items = [];
  for (let num = 0; num < _mod1458.length; num = num + 1) {
    if (typeof global[_mod1458[num]] === "function") {
      items[items.length] = _mod1458[num];
    }
  }
  return items;
};