// _runtime/01457_availableTypedArrays.js
import _mod1458 from "metro/01458__.js";

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
}
